import React from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Heading from '@/components/shared/Heading';

const EmployerJobDetailsPage = () => {
    return (
        <div className='p-5'>
            <Breadcrumb name='Job' />

            <Heading
                title='Job information'
                description='All details about the job'
            />
        </div>
    );};

export default EmployerJobDetailsPage;