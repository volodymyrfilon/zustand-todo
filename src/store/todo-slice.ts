import { TodoSlice, TodoState } from '@/types/todo';
import { StateCreator } from 'zustand';

const initialState: TodoState = {
  todos: [{ id: 0, text: 'First Todo', completed: false, removed: false }],
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
  editTodo: (id: number, newText: string) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)),
    })),
  removeTodo: (id: number) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, removed: true } : todo)),
    })),
  toggleEditMode: () =>
    set(state => {
      const token = sessionStorage.getItem('authToken');
      const hasPermission = !!token;

      return hasPermission
        ? {
            editMode: !state.editMode,
            hasPermission,
          }
        : {
            editMode: false,
            hasPermission,
          };
    }),
  deleteTodo: (id: number) =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    })),
});
