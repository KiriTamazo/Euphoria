/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import DashboardSidebar from '@/Components/component/DashboardSidebar';

export default function AuthLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [menuActive,setMenuActive] =useState(true)

    return (
        <>
            {/* // <div className="min-h-screen  bg-gray-100"> */}
            <DashboardSidebar menuActive={menuActive} setMenuActive={setMenuActive} />
            <main className={`w-full min-h-screen  ${menuActive ? 'pl-[250px]' : 'pl-[90px]'} transition-all duration-500 ease-in-out`}>
                {children}
            </main>
            {/* </div> */}
        </>
    );
}
