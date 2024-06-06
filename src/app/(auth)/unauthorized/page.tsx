import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const page = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-dark to-primary text-center text-white">
      <div className="container">
        <h1 className="mb-4 text-3xl font-black uppercase text-accent sm:text-4xl">
          Unauthorized Access!
        </h1>
        <p className="mb-4 font-bold">
          You do not have the necessary permissions to access this page!
        </p>
        <Button
          ariaLabel="Login"
          href="/login"
          icon={<IconChevronRight size={20} stroke={1.5} />}
          variant="accent"
        >
          Sign in
        </Button>
      </div>
    </section>
  );
};

export default page;
