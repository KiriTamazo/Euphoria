import UserLayout from '@/Layouts/UserLayout'
import HeroSection from './HeroSection'

const Home = () => {
    return (
        <main>
            <HeroSection />
        </main>
    )
}
Home.layout = page => <UserLayout children={page} title="Welcome" />

export default Home