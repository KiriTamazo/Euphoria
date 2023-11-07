import Footer from '@/Components/component/Footer'
import Navbar from '@/Components/component/Navbar'

const UserLayout = ({children}) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
export default UserLayout