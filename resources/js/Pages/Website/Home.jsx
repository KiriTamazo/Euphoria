import { Button } from '@/Components/ui/button'
import UserLayout from '@/Layouts/UserLayout'

const Home = () => {
    return (
        <div>
            <Button variant='danger'>Button</Button>
        </div>
    )
}
Home.layout = page => <UserLayout children={page} title="Welcome" />

export default Home