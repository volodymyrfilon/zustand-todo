'use client';

import { TodoList } from '@/components/shared/todo/TodoList';
import { useStore } from '@/store';
import { checkAuthorization } from '@/utils/auth';

checkAuthorization();

const page = () => {
  const todos = useStore(state => state.todos);
  const editMode = useStore(state => state.editMode);
  const toggleEditMode = useStore(state => state.toggleEditMode);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="mb-4 text-2xl font-bold">TODO List</h1>
      <TodoList todos={todos} />
      <button className="mt-4 rounded bg-blue-500 p-2 text-white" onClick={toggleEditMode}>
        {editMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
      </button>
    </div>
  );
};

export default page;
