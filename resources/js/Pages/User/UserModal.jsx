/* eslint-disable no-unused-vars */
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import { Button } from '@/Components/ui/button'
import { Dialog, DialogContent,DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { Link, useForm } from '@inertiajs/react'
import { useEffect } from 'react'
import { useMemo } from 'react'

const UserModal = ({modalOpen,setModalOpen,selectedUser,type}) => {
    const {title,btnText,route} = useMemo(()=>{
        const title = type === 'create' ? 'Create' : 'Edit'
        const btnText  = type === 'create' ? 'Create' :'Update'
        const route = type === 'create' ? 'admin.users.store' :'admin.users.update'
        return {title,btnText,route}
    },[type])

    const {data,setData,reset,clearErrors,post,errors,processing} = useForm({
        name:'',
        email:'',
    })
    useEffect(()=>{
        if(modalOpen) {
            clearErrors()
        }
    },[modalOpen])
    useEffect(()=>{
        if(type === 'create') {
            reset()
        }
        if(type === 'edit'){
            setData({
                name:selectedUser ? selectedUser?.name : '',
                email:selectedUser ? selectedUser?.email : '',
            })
        }
    },[type,modalOpen])
    const handleSubmit = ()=>{
        const route = type === 'create' ? 'admin.users.store' :'admin.users.update';
        const payload = type === 'create' ? {}:{user:selectedUser?.id} 
        post(window.route(route,payload),{
            onSuccess:()=>{
                setModalOpen(false)
            },
            preserveScroll:true
        })
    }
    return (
        <Dialog open={modalOpen} onOpenChange={(state)=>setModalOpen(state)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title} User</DialogTitle>
                    {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
                    </DialogDescription> */}
                </DialogHeader>
                <InputLabel
                    errors={errors}
                    name='name'
                    value={data?.name}
                    onChange={(e)=>{setData('name',e.target.value)}}
                />
                <InputLabel 
                    name="email" 
                    value={data?.email} 
                    handleChange={(e)=>{setData('email',e.target.value)}} 
                    errors={errors} 
                />
                <DialogFooter>
                    <Button onClick={handleSubmit} isLoading={processing} variant='success' type="submit">{btnText}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default UserModal