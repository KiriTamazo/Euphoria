/* eslint-disable no-unused-vars */
import Breadcrumb from '@/Components/Breadcrumb'
import Paginator from '@/Components/Paginator';
import  Table  from '@/Components/Table'
import { TableCell } from '@/Components/ui/table';
import AuthLayout from '@/Layouts/AuthenticatedLayout'
import { router } from '@inertiajs/react';
import { useCallback } from 'react';
const items = [
    { label: 'Home', link: '/' },
    {
        label:'Users',
        // link:'admin/users',
    }
]
const columns = [
    { label: 'Invoice', className: 'w-[100px]' },
    { label: 'Status' },
    { label: 'Method' },
    { label: 'Amount', className: 'text-right' },
];

const data = [
    { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    // Add more data rows as needed
];
const Index = ({users}) => {
    // const handlePageClick = useCallback((event) =>{
    //     console.log('here')
    //     router.visit(users?.links[event.selected + 1]?.url)
    // },[router,users])
    return (
        <section className='adminLayout'>
            <Breadcrumb items={items} />
            <Table 
                renderItem={
                    (data)=>(
                        <>
                            <TableCell>{data?.id}</TableCell>
                        </>)
                }
                columns={columns} datas={users} />
               
            
            User
        </section>
    )
}
Index.layout = (page) => <AuthLayout>{page}</AuthLayout>
export default Index