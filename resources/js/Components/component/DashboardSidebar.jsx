/* eslint-disable no-unused-vars */

import { sidebarLinks } from '@/helpers/links'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

const DashboardSidebar = ({menuActive,setMenuActive}) => {
    const [menuHover,setMenuHover] = useState(false)
    return (
        <aside onMouseEnter={()=>{
            if(!menuActive){
                setMenuHover(true)}}
        }
        onMouseLeave={()=>setMenuHover(false)}
        className={`${menuActive ? 'w-[200px]' :'w-[50px]'} ${menuHover ? '!w-[200px]' : ''} bg-slate-200 z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out inline-block` }>
            <div onClick={()=>setMenuActive(!menuActive)} className="h-[8%] flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft className={`${menuActive ? '': 'rotate-180 hidden'} ${menuHover ? '!block':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <div className="h-[92%] p-4 overflow-y-auto">
                <ul>
                    {sidebarLinks?.map((link,i)=>{
                        console.log(link)
                        return   <li key={i}>
                            {link?.icon}
                            <p>{link?.name}</p>
                        </li>

                    })}
                </ul>
            </div>
        </aside>
    )
}
export default DashboardSidebar