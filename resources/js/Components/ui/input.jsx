/* eslint-disable no-unused-vars */
import {forwardRef} from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useMemo } from 'react';

const Input = forwardRef(({ className, type, ...props }, ref) => {
    const [showPassword,setShowPassword] = useState()
    const handlePassword = () =>{
        setShowPassword(!showPassword)
    }
    const dynamicType = useMemo(() => {
        if (type === 'password' && showPassword) {
            return 'text';
        } else {
            return type;
        }
    }, [type, showPassword]);
    
    return (
        (
            <div className='relative'>
                <input
                    type={dynamicType}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {
                    type === 'password' ?
                        showPassword ? 
                            <EyeOff onClick={handlePassword} className='absolute top-2 right-2 text-sm text-slate-500 cursor-pointer' /> : 
                            <Eye onClick={handlePassword} className='absolute top-2 right-2 text-sm text-slate-500 cursor-pointer' />
                        :null
                }
            </div>
        )
    );
})
Input.displayName = 'Input'

export { Input }
