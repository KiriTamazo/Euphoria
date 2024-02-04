import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { Trash2Icon } from 'lucide-react'

const DeleteButton = ({handleDelete,btnText,className,iconClassName}) => {
    return (
        <Button variant="danger" 
            className={cn('',className)} 
            btnIcon={<Trash2Icon className={cn('w-4 h-4',iconClassName)} />} 
            onClick={handleDelete}
        >
            {btnText ? btnText : 'Delete'}
        </Button>
    )
}
export default DeleteButton