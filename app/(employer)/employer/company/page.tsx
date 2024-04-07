'use client'

import Loading from '@/components/Loading';
import { columns } from '@/components/employer/category/Columns';
import { DataTable } from '@/components/employer/category/DataTable';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Heading from '@/components/shared/Heading';
import { Button } from '@/components/ui/button';
import { useGetAllCompanies } from '@/hooks/useCompanyHooks';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { HiPlus } from 'react-icons/hi';
import {ICompany} from "@/types/company";

const EmployerCompanyPage = () => {
    // if (error) {
    //   toast.error('Something went wrong');
    // }
    const { data: companies, isLoading, error } = useGetAllCompanies();

    // const convertedCompanies = companies?.map((com: ICompany) => ({
    //     id: com.id,
    //     name: com.name,
    //     industry: com.industry,
    //     address: com.address,
    //     city: com.city,
    // }));


    if (error) {
        toast.error('Something went wrong');
    }

    return (
        <div className='p-5'>
            <Breadcrumb name='Company' />

            <Heading title='Company' description='Manage all companies' />

            <Button variant='outline' asChild className='mt-5'>
                <div>
                    <HiPlus className='mr-2 h-5 w-5' />
                    <Link href='/employer/company/create'>Add company</Link>
                </div>
            </Button>

            {isLoading ? (
                <Loading />
            ) : (
                <div className='mx-auto pt-6'>
                    <DataTable columns={columns} data={companies} />
                </div>
                )}
        </div>
    );
};


export default EmployerCompanyPage;