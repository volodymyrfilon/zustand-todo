type Todo = {
  id: number;
  text: string;
  completed: boolean;
  removed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoActions = {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
};

export type TodoSlice = TodoState & TodoActions;
