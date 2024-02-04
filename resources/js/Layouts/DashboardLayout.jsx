/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DashboardSidebar from '@/Components/component/Dashboard/DashboardSidebar';
import { Toaster } from '@/Components/ui/toaster';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function DashboardLayout({ user, header, children }) {
    const [menuActive,setMenuActive] =useState(true)
    useEffect(()=>{

    },[])
    return (
        <>
            {/* // <div className="min-h-screen  bg-gray-100"> */}
            <DashboardSidebar menuActive={menuActive} setMenuActive={setMenuActive} />
            <main className={`w-full min-h-screen  ${menuActive ? 'pl-[250px]' : 'pl-[90px]'} transition-all duration-500 ease-in-out`}>
                {children}
            </main>
            <Toaster />
            {/* </div> */}
        </>
    );
}
