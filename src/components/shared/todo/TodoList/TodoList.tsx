import { useStore } from '@/store';

export const TodoList = ({ todos }) => {
  const toggleTodo = useStore(state => state.toggleTodo);
  const removeTodo = useStore(state => state.removeTodo);
  const editMode = useStore(state => state.editMode);
  const sortedTodos = todos.sort((a, b) => a.completed - b.completed);

  return (
    <ul className="list-none p-0">
      {sortedTodos.map(todo => (
        <li
          key={todo.id}
          className={`flex justify-between p-2 ${todo.removed ? 'line-through' : ''}`}
        >
          <span>{todo.text}</span>
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            {editMode && (
              <button onClick={() => removeTodo(todo.id)} className="text-red-500">
                Remove
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
