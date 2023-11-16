const Footer = () => {
    const date = new Date();
    return (
        <footer className="container py-2 bg-slate-200">
            <div className='flex py-8'>
                <div className="basis-[25%]">Logo</div>
                <div className="basis-[25%]">Categories</div>
                <div className="basis-[25%]">Contact</div>
                <div className="basis-[25%]">Subscribe</div>
            </div>
            <div className='flex text-slate-500 justify-between items-center'>
                <p>  &copy; Euphoria {date.getFullYear()} All rights reserved</p>
                <p>Developed By LWHA</p>
            </div>
        </footer>
    )
}
export default Footer