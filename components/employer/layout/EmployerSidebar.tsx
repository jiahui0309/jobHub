'use client';

import { Separator } from '@/components/ui/separator';
import {
    HiOutlineChartSquareBar,
    HiOutlineCog,
    HiOutlineCollection,
    HiOutlineCube,
    HiOutlineLibrary,
    HiOutlineLogout,
    HiOutlineViewGrid,
} from 'react-icons/hi';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { cn } from '@/libs/utils';
import { signOut } from 'next-auth/react';

const EmployerSidebar = ({
                             className,
                             ...props
                         }: React.HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/employer/dashboard`,
            label: 'Overview',
            active: pathname === `/employer/dashboard`,
            icon: <HiOutlineChartSquareBar className='h-6 w-6' />,
        },
        {
            href: `/employer/company`,
            label: 'Companies',
            active: pathname.includes(`/employer/company`),
            icon: <HiOutlineLibrary className='h-6 w-6' />,
        },
        {
            href: `/employer/category`,
            label: 'Categories',
            active: pathname.includes(`/employer/category`),
            icon: <HiOutlineCollection className='h-6 w-6' />,
        },
        {
            href: `/employer/job`,
            label: 'Jobs',
            active: pathname.includes(`/employer/job`),
            icon: <HiOutlineCube className='h-6 w-6' />,
        },
        {
            href: `/employer/settings`,
            label: 'Settings',
            active: pathname === `/employer/settings`,
            icon: <HiOutlineCog className='h-6 w-6' />,
        },
    ];

    return (
        <aside className='border border-gray-200 p-3 rounded-lg w-[300px]'>
            <div className='flex gap-4 items-center justify-center mt-1 mb-4'>
                <HiOutlineViewGrid className='h-10 w-10' />
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-semibold '>Dashboard</h2>
                    <p className='text-base text-gray-500'>Employer</p>
                </div>
            </div>

            <Separator />

            <nav
                className={cn('flex flex-col space-y-4 lg:space-y-6 mt-6', className)}
                {...props}
            >
                {routes.map((route) => (
                    <div
                        className={cn(
                            'flex gap-2 items-center p-2 rounded-md text-lg font-medium transition-colors hover:bg-gray-100',
                            route.active
                                ? 'text-black bg-gray-200 dark:text-white '
                                : 'text-muted-foreground'
                        )}
                        key={route.href}
                    >
                        {route.icon}
                        <Link
                            href={route.href}
                            className={cn(
                                'text-lg font-medium transition-colors',
                                route.active
                                    ? 'text-black dark:text-white '
                                    : 'text-muted-foreground'
                            )}
                        >
                            {route.label}
                        </Link>
                    </div>
                ))}
                <div
                    onClick={() => signOut()}
                    className='flex gap-2 items-center p-2 rounded-md text-lg font-medium transition-colors cursor-pointer hover:bg-gray-100 dark:hover:text-black'
                >
                    <HiOutlineLogout className='h-6 w-6' />
                    <p className='text-lg font-medium transition-colors'>Sign Out</p>
                </div>
            </nav>
        </aside>
);
};

export default EmployerSidebar;