import DashboardLayout from '@/Layouts/DashboardLayout'
import ProductTable from './ProductTable'
import Breadcrumb from '@/Components/Breadcrumb'
const items = [
    {
        label: 'Dashboard', 
        link: 'admin.dashboard'
    },
    {
        label:'Products',
    }
]
const Index = () => {
    return (
        <div> 
            <Breadcrumb items={items} />
            <ProductTable />
        </div>
    )
}
Index.layout = (page) => <DashboardLayout>{page}</DashboardLayout>
export default Index