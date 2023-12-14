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
        className={`${menuActive || menuHover ? 'w-[250px]' :'w-[90px]'} cursor-pointer bg-slate-200 z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out inline-block` }>
            <div onClick={()=>setMenuActive(!menuActive)} className=" flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft className={`${menuActive ? '': 'rotate-180 opacity-0 invisible'} ${menuHover ? 'opacity-100 !visible':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <ul className="flex flex-col overflow-x-hidden">
                {sidebarLinks?.map((link,i)=>{
                    return   (
                        <li key={i}>
                            <div className='flex my-2 py-2 px-2 mx-4 rounded bg-blue-300 items-center  '>
                                <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                                <p className={'ml-4  text-sm tracking-wide truncate'}>{link?.name}</p>
                            </div>
                        </li>)

                })}
            </ul>
        </aside>
    )
}
export default DashboardSidebar

// className={`${menuActive || menuHover ? ' ':''} mx-2 flex transition-all duration-500 items-center overflow-hidden  ease-in-out   py-2  rounded bg-blue-200 my-2 px-2 `} 