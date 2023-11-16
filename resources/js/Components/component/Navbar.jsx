import Logo from '@/assets/logo'
import { Menu, Search, ShoppingBagIcon, User2 } from 'lucide-react'
import NavLink from '../NavLink'
import { usePage } from '@inertiajs/react';

const Navbar = () => {
    const {component} = usePage();
    return (
        <header className="fixed top-0 right-0 left-0 bg-background z-[100] py-4 shadow-md ">
            <nav className='container flex items-center justify-between'>
                <Menu className='block lg:hidden' />
                <Logo className='w-6 h-6' />           
                <ul className=" gap-6 items-center lg:flex hidden">
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
        </header>
    )
}
export default Navbar