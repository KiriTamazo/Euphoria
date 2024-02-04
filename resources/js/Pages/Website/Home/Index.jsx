import UserLayout from '@/Layouts/UserLayout'
import HeroSection from './HeroSection'
import CategorySection from './CategorySection'

const Home = () => {
    console.log(window.route('dashboard'))
    return (
        <main>
            <HeroSection />
            <CategorySection />
        </main>
    )
}
Home.layout = page => <UserLayout children={page} title="Welcome" />

export default Home