import Navbar from '@/Components/Navbar'

const UserLayout = ({children}) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}
export default UserLayout