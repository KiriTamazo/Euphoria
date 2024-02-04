/* eslint-disable no-unused-vars */
import { cn } from '@/lib/utils'
import InputError from './InputError'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useState ,useEffect} from 'react'

const InputLabel = ({value,handleChange,name,type='edit', labelClass,className,wrapperClassName, errors,...props}) => {
    const [show,setShow] = useState(errors ? true :false)
    useEffect(()=>{
        if(errors[name]){
            setShow(true)
        }
    },[errors])

    useEffect(()=>{
        if(value === ''){
            setShow(true)
        }else{
            setShow(false)
        }
    },[value])
    console.log(errors,'error')
    return (
        <div className={cn('flex flex-col gap-2',wrapperClassName)}>
            <Label htmlFor="username" className={cn('capitalize',labelClass)}>
                {name}
            </Label>
            <Input
                name={name}
                id={name}
                className={cn('col-span-3',className)}
                value={value}
                onChange={handleChange}
                {...props}
            />
            <InputError                 
                show={show}
                message={errors[name]} 
            />
        </div>
    )
}
export default InputLabel