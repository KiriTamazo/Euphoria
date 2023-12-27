import { Dialog } from '@/Components/ui/dialog'

const UserModal = ({modal,setModal,}) => {
    return (
        <Dialog open={modal} onOpenChange={(state)=>setModal(state)}>
        </Dialog>
    )
}
export default UserModal