import Button from '@/components/ui/button';
import { useStore } from '@/store/';
import { Todo } from '@/types/todo';
import { IconEyeOff, IconX } from '@tabler/icons-react';

export const TodoItem = ({ id, text, completed, removed }: Todo) => {
  const toggleTodo = useStore(state => state.toggleTodo);
  const removeTodo = useStore(state => state.removeTodo);
  const deleteTodo = useStore(state => state.deleteTodo);
  const editMode = useStore(state => state.editMode);

  if (!editMode && removed) return null;

  return (
    <div
      className={`flex min-h-16 w-full flex-col items-start justify-between rounded-lg bg-accent p-2 md:flex-row md:items-center ${removed ? 'text-gray-400 opacity-60' : 'text-textColor'}`}
    >
      <div className="mb-2 flex items-center gap-x-4 md:mb-0">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="mr-2"
        />
        <p className={`flex-1 text-lg font-semibold ${completed ? 'line-through' : ''}`}>{text}</p>
      </div>
      {editMode && (
        <div className="flex gap-x-2">
          <Button
            onClick={() => removeTodo(id)}
            ariaLabel="Remove item"
            className="!bg-red-500 !ring-red-400"
            icon={<IconEyeOff size={20} stroke={1.5} />}
          >
            Remove
          </Button>
          <Button
            onClick={() => deleteTodo(id)}
            ariaLabel="Delete item"
            className="!bg-red-500 !ring-red-400"
            icon={<IconX size={20} stroke={1.5} />}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
