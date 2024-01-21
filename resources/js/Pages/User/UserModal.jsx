/* eslint-disable no-unused-vars */
import InputError from '@/Components/InputError'
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
                <div className="flex flex-col gap-4 py-4">
                    <div className="items-center gap-4">
                        <Label htmlFor="name" className="text-right">
              User Name
                        </Label>
                        <Input
                            name='username'
                            id="username"
                            className="col-span-3"
                            value={data?.name}
                            onChange={(e)=>{setData('name',e.target.value)}}
                        />
                    </div>
                    <div className="items-center gap-4">
                        <Label htmlFor="username" className="text-right">
              Email
                        </Label>
                        <Input
                            name='email'
                            id="email"
                            className="col-span-3"
                            value={data?.email}
                            onChange={(e)=>{setData('email',e.target.value)}}
                        />
                        <InputError message={errors?.email} />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit} isLoading={processing} variant='success' type="submit">{btnText}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default UserModal