'use client';

import Button from '@/components/ui/button';
import { useStore } from '@/store';
import { EditTodoProps } from '@/types/todo';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export const EditTodo = ({ id, text, onCancel }: EditTodoProps) => {
  const editTodo = useStore(state => state.editTodo);
  const [editedText, setEditedText] = useState(text);

  const handleEditSave = () => {
    editTodo(id, editedText);
    onCancel();
  };

  return (
    <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
      <input
        type="text"
        value={editedText}
        onChange={e => setEditedText(e.target.value)}
        className="w-full flex-1 rounded border bg-white p-2 text-lg font-semibold"
      />
      <div className="flex">
        <Button
          onClick={handleEditSave}
          ariaLabel="Save changes"
          className="flex-shrink-0 !bg-green-500 !ring-green-400"
        >
          <IconCheck size={20} stroke={1.5} />
        </Button>
        <Button
          onClick={onCancel}
          ariaLabel="Cancel changes"
          className="mx-2 flex-shrink-0 !bg-red-500 !ring-red-400"
        >
          <IconX size={20} stroke={1.5} />
        </Button>
      </div>
    </div>
  );
};
