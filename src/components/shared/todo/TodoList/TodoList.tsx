import { useStore } from '@/store/';
import { TodoItem } from '../TodoItem';

export const TodoList = () => {
  const todos = useStore(state => state.todos);

  const sortedTodos = todos.slice().sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="flex flex-col gap-y-2">
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
