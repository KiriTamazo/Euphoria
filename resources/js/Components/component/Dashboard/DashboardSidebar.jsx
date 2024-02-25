/* eslint-disable no-unused-vars */

import { sidebarLinks } from '@/helpers/links'
import { ChevronDown, ChevronLeft, LogOutIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../ui/button'
import { router, usePage } from '@inertiajs/react'
import { useEffect } from 'react'

const DashboardSidebar = ({menuActive,setMenuActive}) => {
    const [menuHover,setMenuHover] = useState(false)
    const [modal,setModal] = useState(false)
    const [selectedNavId,setSelectedNavId] = useState(null);
    const handleLogout = () =>{
        router.post(window.route('logout'))
    }
    const handleRedirect = (link) =>{
        router.visit(window.route(link))
    }
    const { routeName}= usePage().props
    useEffect(()=>{
        const link = sidebarLinks?.findIndex(link =>(link.url?.includes(routeName)))
        setSelectedNavId(link)
    },[])
    return (
        <aside onMouseEnter={()=>{
            if(!menuActive){
                setMenuHover(true)
            }}
        }
        onMouseLeave={()=>{
            if(selectedNavId && !menuActive){
                setSelectedNavId(null)
            }
            setMenuHover(false)
        }}
        className={`${menuActive || menuHover ? 'w-[250px]' :'w-[90px]'} cursor-pointer bg-slate-50  z-50 fixed left-0 top-0 h-screen transition-all duration-500 ease-in-out flex flex-col` }>
            <div onClick={()=>setMenuActive(!menuActive)} className=" flex justify-between relative p-4">
                <p>Logo</p>
                <ChevronLeft 
                    className={`${menuActive ? '': 'rotate-180 opacity-0 invisible'} ${menuHover ? 'opacity-100 !visible':''} cursor-pointer absolute  transition duration-500 ease-in-out -right-3 top-5 bg-slate-400 w-7 h-7 rounded-full`} />
            </div>
            <ul className="flex flex-col flex-1 overflow-x-hidden">
                {sidebarLinks?.map((link,i)=>{
                    return   (
                        !link?.children ? <li 
                            key={`navlink-${i}`} 
                            className={`flex my-[.4rem] py-2 px-2 mx-4 rounded transition-all duration-500 items-center navlink ${link?.url === routeName ? 'active' : '' }`}
                            onClick={()=>handleRedirect(link?.url)}>
                            <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                            <p className={'ml-4 text-base tracking-wide truncate'}>{link?.name}</p>
                        </li> : 
                            <>
                                <li 
                                    onClick={()=>{
                                        if((!menuHover && !menuActive)) return

                                        if(selectedNavId === i){
                                            setSelectedNavId(null)
                                        }else{
                                            setSelectedNavId(i)
                                        }
                                    }}  
                                    key={i} 
                                    className='flex my-[.4rem] py-2 px-2 mx-4 rounded items-center' 
                                >
                                    <span className={'inline-flex justify-center items-center ml-[.7rem]'}> {link?.icon}</span> 
                                    <p className={'ml-4 flex-1  text-base tracking-wide truncate'}>{link?.name}</p>
                                    <ChevronDown 
                                        className={`w-5 h-5 ${( selectedNavId === i) ? 'rotate-180' :''} transition-all duration-500`} />
                                </li>
                                <li
                                    style={{
                                        height: (selectedNavId === i)  ? `${link?.children?.length + 5}rem` : '0px'
                                    }}
                                    className='bg-blue-100 flex items-center mx-4 overflow-hidden transition-all duration-300 rounded '
                                >
                                    <div className='py-2 space-y-2 w-full'>
                                        {(menuActive || menuHover) && link?.children?.map((item,idx)=>(
                                            <div 
                                                onClick={()=>router.visit(window.route(link?.url[idx]))} 
                                                className={`${(menuActive || menuHover) ? '':'sr-only'} navlink mx-2 py-2 px-4 ${link?.url[idx] === routeName ? 'bg-slate-200':'bg-blue-200' } rounded transition-all`} 
                                                key={`nav-${item?.name}-${idx}`}>
                                                <p>{item?.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </>
                    )   

                })}
            </ul>
            <Button 
                btnIcon={<LogOutIcon 
                    className={`w-5 h-5 inline-block transition-all duration-500 ${menuHover || menuActive ? 'sr-only':''}`} 
                />} 
                onClick={handleLogout} 
                variant='danger' 
                className={` mx-auto  text-start ${menuHover|| menuActive ? ' justify-start w-[90%] ':'w-[70%]'}  px-4 mb-2 transition-all duration-500 `}
            >
                <p className={`${!menuHover && !menuActive ? 'sr-only':'text-center'} flex-1 transition-all inline-block text-base`}>
                    Logout
                </p>
            </Button>
        </aside>
    )
}
export default DashboardSidebar
