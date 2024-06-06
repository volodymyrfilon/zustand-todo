import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const HomePage = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-br from-primary-dark to-primary">
      <div className="container flex flex-col items-start justify-center gap-y-5 md:items-center">
        <h1 className="text-5xl font-black uppercase text-white">Welcome to TODO App</h1>
        <p className="font-semibold text-white">
          Organize your tasks efficiently and boost your productivity.
        </p>
        <Button
          ariaLabel="Login"
          href="/login"
          icon={<IconChevronRight size={20} stroke={1.5} />}
          variant="secondary"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
