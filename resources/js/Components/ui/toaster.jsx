import { usePage } from '@inertiajs/react';
import { useCallback,useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toaster() {
    const {flash} = usePage().props
    const handleToast = useCallback(() =>{
        let message,type;
        if(flash.success || flash.error || flash.info || flash.warning){
            if (flash.success){
                message = flash.success;
                type = 'success';
            }
            if (flash.error){
                message = flash.error;
                type = 'danger';
            }
            if (flash.info){
                message = flash.info;
                type = 'info';
            }
            if (flash.warning){
                message = flash.warning;
                type = 'warning';
            }
            toast.dismiss()
            toast(message,{
                type
            })
        }
       
    },[flash])
    useEffect(()=>{
        let removeToast = handleToast();
        return ()=> removeToast && removeToast()
    },[handleToast])
    return (
        (
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover
            />

        )
    );
}
