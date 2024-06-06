import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const page = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-dark to-primary text-center text-white">
      <h1 className="mb-4 text-4xl font-black uppercase text-accent">Unauthorized Access!</h1>
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
    </section>
  );
};

export default page;
