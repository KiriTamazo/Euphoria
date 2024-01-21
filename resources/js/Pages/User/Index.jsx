/* eslint-disable no-unused-vars */
import Breadcrumb from '@/Components/Breadcrumb'
import DeleteModal from '@/Components/DeleteModal';
import  Table  from '@/Components/Table'
import { Button } from '@/Components/ui/button';
import { TableAction, TableCell } from '@/Components/ui/table';
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { router } from '@inertiajs/react';
import { useState } from 'react';
import UserModal from './UserModal';
const items = [
    { label: 'Home', link: '/' },
    {
        label:'Users',
        // link:'admin/users',
    }
]
const columns = [
    { label: 'Id', className: 'w-[100px]' },
    { label: 'Name' ,className: 'min-w-[150px]'},
    { label: 'Email' },
    { label: 'Action', className: '' },
];

const Index = ({users}) => {
    const [deleteModal,setDeleteModal] = useState(false)
    const [modal,setModal] = useState(false)
    const [selectedUser,setSelectedUser] = useState(null);
    const [type,setType] = useState(null);
    const handleOpenModal = (type)=>{
        setModal(true)
        setType(type)
    }
    const handleDelete = () =>{
        router.delete(window.route('admin.users.destroy',{user:selectedUser?.id}),{
            preserveScroll: true
        })
    }
    return (
        <section className='admin__layout bg-slate-200'>
            <Breadcrumb items={items} />
            <div className='bg-white py-6 px-8 rounded-md'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-xl '>Users</h1>
                    <Button onClick={()=>handleOpenModal('create')}>Add User</Button>
                </div>
                <Table 
                    renderItem={
                        (user,i)=>{                           
                            return(
                                <>
                                    <TableCell>{user?.id}</TableCell>
                                    <TableCell>{user?.name}</TableCell>
                                    <TableCell>{user?.email}</TableCell>
                                    <TableAction>
                                        <Button onClick={()=>{
                                            handleOpenModal('edit')
                                            setSelectedUser(user)
                                        }}>Edit</Button>
                                        <Button variant="danger" onClick={()=>{
                                            setDeleteModal(true)
                                            setSelectedUser(user)
                                        }}>Delete</Button>
                                    </TableAction>
                                </>)}
                    }
                    columns={columns} datas={users} />
            </div>
            <DeleteModal handleDelete={handleDelete} modal={deleteModal} setModal={setDeleteModal} />
            <UserModal type={type} selectedUser={selectedUser} modalOpen={modal} setModalOpen={setModal} />
        </section>
    )
}
Index.layout = (page) => <AuthLayout>{page}</AuthLayout>
export default Index