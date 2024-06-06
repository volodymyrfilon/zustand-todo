export type EditTodoProps = {
  id: number;
  text: string;
  onCancel: () => void;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  removed: boolean;
};

export type TodoState = {
  todos: Todo[];
  editMode: boolean;
  hasPermission: boolean;
};

export type TodoActions = {
  addTodo: (text: string) => void;
  editTodo: (id: number, newText: string) => void;
  removeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  toggleEditMode: () => void;
  editMode: boolean;
};

export type TodoSlice = TodoState & TodoActions;
