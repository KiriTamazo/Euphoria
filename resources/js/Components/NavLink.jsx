import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={cn('inline-flex relative items-center text-color leading-5 transition duration-150 ease-in-out focus:outline-none before:content-[""] before:absolute  before:rounded before:w-0  before:h-[3px] before:-bottom-1 rounded before:bg-primary ' +
            (active
                ? 'before:w-full focus:border-primary '
                : 'border-transparent hover:text-primary/90')
            ,className)
            }
        >
            {children}
        </Link>
    );
}
