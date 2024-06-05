import { TodoSlice, TodoState } from '@/types/todo';
import { StateCreator } from 'zustand';

const initialState: TodoState = {
  todos: [{ id: 0, text: 'Sample TODO', completed: false, removed: false }],
};

export const createTodoSlice: StateCreator<TodoSlice, [], [], TodoSlice> = set => ({
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
    set(state => ({
      editMode: !state.editMode,
    })),
  editMode: false,
});
