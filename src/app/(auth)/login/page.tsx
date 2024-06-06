import { LoginForm } from '@/components/shared/auth/LoginForm/';

const page = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-br from-primary-dark to-primary">
      <div className="bg-neutralColor flex flex-col gap-y-4 rounded-md p-6 shadow-2xl">
        <h1 className="text-textColor text-center text-2xl font-bold">Sign in</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default page;
