/* eslint-disable no-unused-vars */

import { sidebarLinks } from '@/helpers/links'
import { ChevronDown, ChevronLeft, LogOutIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../ui/button'
import { router } from '@inertiajs/react'
import DeleteModal from '../../DeleteModal'

const DashboardSidebar = ({menuActive,setMenuActive}) => {
    const [menuHover,setMenuHover] = useState(false)
    const [modal,setModal] = useState(false)
    const [selectedNavId,setSelectedNavId] = useState(null);
    const [subNavOpen,setSubNavOpen] = useState(false)
    const handleLogout = () =>{
        router.post(window.route('logout'))
    }
    const handleRedirect = (link) =>{
        router.visit(window.route(link))
    }
    
    return (
        <aside onMouseEnter={()=>{
            if(!menuActive){
                setMenuHover(true)}}
        }
        onMouseLeave={()=>setMenuHover(false)}
        className={`${menuActive || menuHover ? 'w-[250px]' :'w-[90px]'} cursor-pointer bg-slate-100 z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out flex flex-col` }>
            <div onClick={()=>setMenuActive(!menuActive)} className=" flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft 
                    className={`${menuActive ? '': 'rotate-180 opacity-0 invisible'} ${menuHover ? 'opacity-100 !visible':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <ul className="flex flex-col flex-1 overflow-x-hidden">
                {sidebarLinks?.map((link,i)=>{
                    return   (
                        !link?.children ? <li key={i} className='flex my-[.4rem] py-2 px-2 mx-4 rounded bg-primary/20 text-primary  items-center ' onClick={()=>handleRedirect(link?.url)}>
                            <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                            <p className={'ml-4  text-base tracking-wide truncate'}>{link?.name}</p>
                        </li> : <>
                            <li 
                                onClick={()=>{
                                    console.log(i,selectedNavId);
                                    if(selectedNavId === i){
                                        setSubNavOpen(false)
                                        setSelectedNavId(null)
                                    }else{
                                        setSubNavOpen(true)
                                        setSelectedNavId(i)
                                    }
                                }}  
                                key={i} 
                                className='flex my-[.4rem] py-2 px-2 mx-4 rounded bg-primary/20 text-primary  items-center' 
                            >
                                <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                                <p className={'ml-4 flex-1  text-base tracking-wide truncate'}>{link?.name}</p>
                                <ChevronDown className='w-5 h-5' />
                            </li>
                            <li
                                style={{
                                    height: (subNavOpen && selectedNavId === i)  ? `${link?.children?.length + 5}rem` : '0px'
                                }}
                                className='bg-blue-500 flex items-center mx-4 overflow-hidden transition-all duration-300 rounded '
                            >
                                <div className='py-2 space-y-2 w-full'>
                                    {(menuActive || menuHover) && link?.children?.map((item,idx)=>(
                                        <div  
                                            className={`${(menuActive || menuHover) ? '':'sr-only'} mx-2 py-2 px-4 bg-slate-600 rounded transition-all`} key={idx}>
                                            <p>{item?.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        </>
                    )   

                })}
            </ul>
            <Button btnIcon={<LogOutIcon className='w-5 h-5' />} 
                onClick={handleLogout} variant='danger' className={`w-full block ${menuHover|| menuActive ? 'w-[90%] justify-start':''}  px-6 mb-2 `}>
                <span className={`${!menuHover ? 'sr-only':''}`}>
                    Logout
                </span>
            </Button>
        </aside>
    )
}
export default DashboardSidebar

// className={`${menuActive || menuHover ? ' ':''} mx-2 flex transition-all duration-500 items-center overflow-hidden  ease-in-out   py-2  rounded bg-blue-200 my-2 px-2 `} 