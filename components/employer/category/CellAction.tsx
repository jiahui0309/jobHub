import { Button } from '@/components/ui/button';
import React from 'react';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { CategoryColumn } from './Columns';
import { useCategoryModal } from '@/hooks/useCategoryModal';

interface CellActionProps {
    data: CategoryColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const { onEdit, onDelete } = useCategoryModal();

    return (
        <div>
            <Button
                type='button'
                onClick={() => {
                    onEdit(data);
                }}
                variant='outline'
                className='mr-2'
            >
                <HiOutlinePencilAlt className='mr-2 w-5 h-5' />
                Edit
            </Button>
            <Button type='button' onClick={() => onDelete(data)} variant='outline'>
                <HiOutlineTrash className='mr-2 w-5 h-5' />
                Delete
            </Button>
        </div>
    );
};

export default CellAction;