import { LoginForm } from '@/components/shared/auth/LoginForm';

const page = () => {
  return (
    <section className="from-tertiary-dark to-tertiary flex h-screen items-center justify-center bg-white bg-gradient-to-br">
      <div className="flex flex-col gap-y-4 rounded-md bg-gray-200 p-6 shadow-2xl">
        <h1 className="text-center text-2xl font-bold">Sign in</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default page;
