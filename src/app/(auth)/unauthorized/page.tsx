import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const page = () => {
  return (
    <section className="from-tertiary-dark to-tertiary flex h-screen flex-col items-center justify-center bg-gradient-to-br text-center text-red-800">
      <h1 className="mb-4 text-4xl font-bold">Unauthorized Access!</h1>
      <p className="mb-4">You do not have the necessary permissions to access this page!</p>
      <Button href="/login" icon={<IconChevronRight size={18} stroke={1.5} />} variant="accent">
        Sign in
      </Button>
    </section>
  );
};

export default page;
