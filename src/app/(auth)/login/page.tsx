import { LoginForm } from '@/components/shared/auth/LoginForm/';

const page = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-br from-primary-dark to-primary">
      <div className="container flex items-center justify-center">
        <div className="bg-neutralColor flex w-full flex-col gap-y-4 rounded-md p-6 shadow-2xl sm:w-80">
          <h1 className="text-textColor text-center text-2xl font-bold">Sign in</h1>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default page;
