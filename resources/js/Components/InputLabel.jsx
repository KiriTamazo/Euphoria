/* eslint-disable no-unused-vars */
import { cn } from '@/lib/utils'
import InputError from './InputError'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useState } from 'react'
import { useEffect } from 'react'
import { memo } from 'react'

const InputLabel = ({value,handleChange,name,type='edit', labelClass,className, errors,...props}) => {
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

    return (
        <div className="flex flex-col gap-2">
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