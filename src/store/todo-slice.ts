import { TodoSlice, TodoState } from '@/types/todo';
import { StateCreator } from 'zustand';

const initialState: TodoState = {
  todos: [{ id: 0, text: 'Sample TODO', completed: false, removed: false }],
  editMode: false,
  hasPermission: false,
};

export const createTodoSlice: StateCreator<
  TodoSlice,
  [['zustand/immer', never]],
  [],
  TodoSlice
> = set => ({
  ...initialState,
  addTodo: (text: string) =>
    set(state => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false, removed: false }],
    })),
  toggleTodo: (id: number) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (id: number) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, removed: true } : todo)),
    })),
  setTodos: todos => set(() => ({ todos })),
  toggleEditMode: () =>
    set(state => {
      const token = sessionStorage.getItem('authToken');
      const hasPermission = !!token;
      return {
        editMode: hasPermission,
        hasPermission,
      };
    }),
});
