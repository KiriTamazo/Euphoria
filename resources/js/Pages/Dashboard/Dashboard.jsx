import AuthLayout from '@/Layouts/AuthenticatedLayout'
 
const Dashboard = () => {
    return (
        <div>Dashboard</div>
    )
}
Dashboard.layout = (page) => <AuthLayout>{page}</AuthLayout>
export default Dashboard