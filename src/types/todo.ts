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
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setTodos: (todos: Todo[]) => void;
  toggleEditMode: () => void;
  editMode: boolean;
};

export type TodoSlice = TodoState & TodoActions;
