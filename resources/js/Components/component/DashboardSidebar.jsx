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
        className={`${menuActive || menuHover ? 'w-[250px]' :'w-[90px]'} bg-slate-200 z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out inline-block` }>
            <div onClick={()=>setMenuActive(!menuActive)} className=" flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft className={`${menuActive ? '': 'rotate-180 hidden'} ${menuHover ? '!block':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <ul className="h-[92%] overflow-hidden">
                {sidebarLinks?.map((link,i)=>{
                    return   <li className={`${menuActive || menuHover ? ' ':''} mx-2 flex transition-all duration-500 items-center  ease-in-out   py-2  rounded bg-blue-200 my-2 px-2 `} key={i}>
                        <span className={`inline-block ${menuActive || menuHover ? '':''} ml-[.35rem]`}> {link?.icon}</span> 
                        <p className={`${menuActive || menuHover ? 'ml-4 opacity-100 block' :'opacity-0 '} text-base flex-1 transition-all duration-500  ease-in-out`}>{link?.name}</p>
                    </li>

                })}
            </ul>
        </aside>
    )
}
export default DashboardSidebar