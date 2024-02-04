import { Button } from '@/Components/ui/button'
import { cn } from '@/lib/utils'
import { Edit } from 'lucide-react'

const EditButton = ({handleEdit,btnText,className,iconClassName}) => {
    return (
        <Button variant="success" 
            className={cn('',className)} 
            btnIcon={<Edit className={cn('w-4 h-4',iconClassName)} />} 
            onClick={handleEdit}
        >
            {btnText ? btnText : 'Edit'}
        </Button>
    )
}
export default EditButton