import { HomeIcon, User,Layers2, Package  } from 'lucide-react';

export const sidebarLinks = [
    {
        name:'Dashboard',
        url:'admin.dashboard',
        icon :<HomeIcon  className='w-5 h-5'/>,
    },
    {
        name:'User',
        url:'admin.users',
        icon :<User className='w-5 h-5'/>,
    },
    {
        name:'Category',
        url:'admin.categories',
        icon :<Layers2 className='w-5 h-5' />,
        children:[
            {
                name:'Categpry Create',
                url:'admin.categpry.create',
            },
            {
                name:'Categpry Delete',
                url:'admin.categpry.delete',
            }
        ]
    },
    {
        name:'Products',
        url:'admin.products',
        icon :<Package className='w-5 h-5' />,
        children:[
            {
                name:'Products Create',
                url:'admin.products.create',
            },
            {
                name:'Products Delete',
                url:'admin.products.delete',
            }
        ]
    }
]