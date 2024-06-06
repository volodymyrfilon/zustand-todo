'use client';

import { withAuth } from '@/components/shared/auth/withAuth';
import { AddTodo } from '@/components/shared/todo/AddTodo';
import { EditToggler } from '@/components/shared/todo/EditToggler';
import { TodoList } from '@/components/shared/todo/TodoList';

const page = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-dark to-primary pt-20 text-white">
      <div className="container flex flex-col gap-y-4">
        <h1 className="text-2xl font-black uppercase">Todo List</h1>
        <EditToggler className="max-w-max" />
        <AddTodo />
        <TodoList />
      </div>
    </section>
  );
};

export default withAuth(page);
