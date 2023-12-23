import { Link } from '@inertiajs/react';
import {  ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center bg-slate-200 my-2 px-4 py-2 rounded  space-x-1 md:space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index !== 0 && (
                            <div className="flex items-center">
                                <ChevronRight className='w-5 h-5 [&>path]:stroke-[3]  text-gray-400' strokeWidth={2} />
                            </div>
                        )}
                        {item.link ? (
                            <Link
                                href={item.link}
                                className={`${
                                    index === items.length - 1
                                        ? 'text-sm font-medium text-gray-500'
                                        : 'text-sm font-medium text-gray-700 hover:text-blue-600'
                                }  dark:text-gray-400 transition duration-300 dark:hover:text-white text-[1.1rem]`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className={`${
                                    index === items.length - 1 ? 'text-sm font-medium text-gray-500' : 'text-sm font-medium text-gray-700'
                                } md:ms-2 dark:text-gray-400 text-[1.1rem]`}
                            >
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
