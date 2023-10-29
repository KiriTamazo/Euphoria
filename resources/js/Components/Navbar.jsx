import Logo from '@/assets/logo'
import { Search, ShoppingBagIcon, User2 } from 'lucide-react'
import NavLink from './NavLink'
import { usePage } from '@inertiajs/react';

const Navbar = () => {
    const {component} = usePage();
    return (
        <nav className="container py-4 shadow-md flex items-center justify-between">
            <Logo className='w-6 h-6' />           
            <ul className="flex gap-6 items-center">
                <li>
                    <NavLink active={component === 'Website/Home'}>Home</NavLink>
                </li>
                <li><NavLink>Products</NavLink></li>
                <li><NavLink>Blogs</NavLink></li>
                <li><NavLink>About Us</NavLink></li>
                <li><NavLink>Contact Us</NavLink></li>
            </ul>
            <div className="flex gap-8 items-center">
                <Search className='cursor-pointer' />
                <ShoppingBagIcon className='cursor-pointer' />
                <User2 className='cursor-pointer' />
            </div>
        </nav>
    )
}
export default Navbar