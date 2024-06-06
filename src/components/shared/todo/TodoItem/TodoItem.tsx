'use client';

import Button from '@/components/ui/button';
import { useStore } from '@/store/';
import { Todo } from '@/types/todo';
import { IconEdit, IconEyeOff, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { EditTodo } from '../EditTodo';

export const TodoItem = ({ id, text, completed, removed }: Todo) => {
  const { toggleTodo, removeTodo, deleteTodo, editMode } = useStore(
    useShallow(state => ({
      toggleTodo: state.toggleTodo,
      removeTodo: state.removeTodo,
      deleteTodo: state.deleteTodo,
      editMode: state.editMode,
    }))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!editMode && removed) return null;

  return (
    <div
      className={`flex w-full flex-col justify-between rounded-lg bg-accent p-4 md:flex-row md:items-center ${removed ? 'text-gray-400 opacity-60' : 'text-textColor'}`}
    >
      <div className="mb-2 flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4 md:mb-0">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="mr-2"
        />
        {isEditing ? (
          <EditTodo id={id} text={text} onCancel={() => setIsEditing(false)} />
        ) : (
          <p
            className={`flex-1 break-words text-lg font-semibold ${completed ? 'line-through' : ''}`}
          >
            {text}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => setIsEditing(true)}
          ariaLabel="Edit item"
          className="!bg-blue-500 !ring-blue-400"
        >
          <IconEdit size={20} stroke={1.5} />
        </Button>
        {editMode && !isEditing && (
          <>
            <Button
              onClick={() => removeTodo(id)}
              ariaLabel="Remove item"
              className="!bg-red-500 !ring-red-400"
              icon={<IconEyeOff size={20} stroke={1.5} />}
            >
              Remove
            </Button>
          </>
        )}
        <Button
          onClick={() => deleteTodo(id)}
          ariaLabel="Delete item"
          className="!bg-red-500 !ring-red-400"
        >
          <IconTrash size={20} stroke={1.5} />
        </Button>
      </div>
    </div>
  );
};
