import { motion,AnimatePresence  } from 'framer-motion';
const containerVariants = {
    hidden: { opacity: 0, y:-5 },
    visible: { opacity: 1, y:0},
};

export default function InputError({show, message, className = '', ...props }) {
    console.log(show)
    return (
        <AnimatePresence>
            {show ? 
                <motion.p 
                    className={'text-xs ml-2 mt-1 text-red-600 ' + className}
                    initial="hidden"
                    animate={show ? 'visible' :'hidden'}
                    exit='hidden'
                    transition={{duration: 0.3}}
                    variants={containerVariants}
                    {...props} 
                >
                    {message}
                </motion.p> : 
                null
            }
            
        </AnimatePresence>
    )
}
