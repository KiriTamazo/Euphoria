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
                    <NavLink active={component === 'Website/Home/Index'}>Home</NavLink>
                </li>
                <li><NavLink active={component === 'Website/Products/Index'}>Products</NavLink></li>
                <li><NavLink active={component === 'Website/Blogs/Index'}>Blogs</NavLink></li>
                <li><NavLink active={component === 'Website/Abouts/Index'}>About Us</NavLink></li>
                <li><NavLink active={component === 'Website/Contacts/Index'}>Contact Us</NavLink></li>
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