/* eslint-disable no-unused-vars */
import { Button } from '@/Components/ui/button'
import { Dialog, DialogContent,DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useMemo } from 'react'

const UserModal = ({modal,setModal,selectedId,type}) => {
    const {title,btnText} = useMemo(()=>{
        const title = type === 'create' ? 'Create' : 'Edit'
        const btnText  = type === 'create' ? 'Create' :'Update'
        return {title,btnText}
    },[type])
    return (
        <Dialog open={modal} onOpenChange={(state)=>setModal(state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title} User</DialogTitle>
                    {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
                    </DialogDescription> */}
                </DialogHeader>
                <div className=" gap-4 py-4">
                    <div className="items-center gap-4">
                        <Label htmlFor="name" className="text-right">
              User Name
                        </Label>
                        <Input
                            name='username'
                            id="username"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="items-center gap-4">
                        <Label htmlFor="username" className="text-right">
              Email
                        </Label>
                        <Input
                            name='email'
                            id="email"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='success' type="submit">{btnText}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default UserModal