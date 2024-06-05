'use client';

import { withAuth } from '@/components/shared/auth/withAuth';
import { AddTodo } from '@/components/shared/todo/AddTodo';
import { EditToggler } from '@/components/shared/todo/EditToggler';
import { TodoList } from '@/components/shared/todo/TodoList';

const page = () => {
  return (
    <section className="from-tertiary-dark to-tertiary min-h-screen bg-gradient-to-br pt-16">
      <div className="container">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <EditToggler />
        <AddTodo />
        <TodoList />
      </div>
    </section>
  );
};

export default withAuth(page);
