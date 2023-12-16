/* eslint-disable no-unused-vars */

import { sidebarLinks } from '@/helpers/links'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { router } from '@inertiajs/react'
import DeleteModal from '../DeleteModal'

const DashboardSidebar = ({menuActive,setMenuActive}) => {
    const [menuHover,setMenuHover] = useState(false)
    const [modal,setModal] = useState(false)
    const handleLogout = () =>{
        router.post('logout')
    }
    const handleDelete = () =>{
        console.log('here')
    }
    return (
        <aside onMouseEnter={()=>{
            if(!menuActive){
                setMenuHover(true)}}
        }
        onMouseLeave={()=>setMenuHover(false)}
        className={`${menuActive || menuHover ? 'w-[250px]' :'w-[90px]'} cursor-pointer bg-white z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out flex flex-col` }>
            <div onClick={()=>setMenuActive(!menuActive)} className=" flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft className={`${menuActive ? '': 'rotate-180 opacity-0 invisible'} ${menuHover ? 'opacity-100 !visible':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <ul className="flex flex-col flex-1 overflow-x-hidden">
                {sidebarLinks?.map((link,i)=>{
                    return   (
                        <li key={i}>
                            <div className='flex my-2 py-3 px-2 mx-4 rounded bg-primary/20 text-primary  items-center  '>
                                <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                                <p className={'ml-4  text-base tracking-wide truncate'}>{link?.name}</p>
                            </div>
                        </li>)

                })}
            </ul>
            <DeleteModal handleDelete={handleDelete} modal={modal} setModal={setModal} />
            <Button onClick={handleLogout} variant='danger' className="w-[90%] mb-2 !mx-auto">Logout</Button>
        </aside>
    )
}
export default DashboardSidebar

// className={`${menuActive || menuHover ? ' ':''} mx-2 flex transition-all duration-500 items-center overflow-hidden  ease-in-out   py-2  rounded bg-blue-200 my-2 px-2 `} 