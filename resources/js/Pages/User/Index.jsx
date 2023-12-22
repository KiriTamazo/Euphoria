import Breadcrumb from '@/Components/component/BreadCrumb'
import AuthLayout from '@/Layouts/AuthenticatedLayout'
const items = [
    { label: 'Home', link: '/' },
    {
        label:'Users',
        // link:'admin/users',
    }
]
const Index = () => {
    return (
        <section className='adminLayout'>
            <Breadcrumb items={items} />
            User</section>
    )
}
Index.layout = (page) => <AuthLayout>{page}</AuthLayout>
export default Index