/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { memo } from 'react'

const DeleteModal = ({modal=false,setModal,handleDelete,title='Are you sure?',description='Do you really want to delete these records?. This process cannot be undone.'}) => {
    const handleDeleteTrigger = () => {
        handleDelete();
        setModal(false);
    }
    return (
        <Dialog open={modal} onOpenChange={(state)=>setModal(state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <X className='border-danger border-4 text-danger mx-auto my-4 rounded-full w-16 h-16  p-2' />
                </DialogHeader>
                <DialogHeader className='text-center'>
                    <DialogTitle className="text-2xl font-semibold text-color text-center">{title}</DialogTitle>
                    <DialogDescription className='py-4 text-center'>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose className='flex-1' asChild>
                        <Button type="button" variant="secondary">Close</Button>
                    </DialogClose>
                    <Button className='flex-1' onClick={handleDeleteTrigger} variant='danger'>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default memo(DeleteModal)