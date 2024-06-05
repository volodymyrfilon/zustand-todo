import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const HomePage = () => {
  return (
    <section className="from-primary to-quaternary-dark flex h-screen items-center justify-center bg-gradient-to-br">
      <div className="container flex flex-col items-start justify-center gap-y-5 md:items-center">
        <h1 className="text-accent text-5xl font-bold uppercase">Welcome to TODO App</h1>
        <p className="text-accent-dark font-semibold">
          Organize your tasks efficiently and boost your productivity.
        </p>
        <Button href="/login" icon={<IconChevronRight size={18} stroke={1.5} />} variant="accent">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
