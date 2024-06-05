import Button from '@/components/ui/button';
import { useStore } from '@/store/';
import { Todo } from '@/types/todo';

export const TodoItem = ({ id, text, completed, removed }: Todo) => {
  const toggleTodo = useStore(state => state.toggleTodo);
  const removeTodo = useStore(state => state.removeTodo);
  const editMode = useStore(state => state.editMode);

  if (!editMode && removed) return null;

  return (
    <div
      className={`flex min-h-16 w-full items-center justify-between rounded-lg bg-gray-200 p-2 ${removed ? 'text-gray-400' : ''}`}
    >
      <div className="flex items-center gap-x-10">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="mr-2"
        />
        <p className={completed ? 'line-through' : ''}>{text}</p>
      </div>
      {editMode && (
        <Button onClick={() => removeTodo(id)} className="ml-2 !bg-red-500 !ring-red-400">
          Remove
        </Button>
      )}
    </div>
  );
};
