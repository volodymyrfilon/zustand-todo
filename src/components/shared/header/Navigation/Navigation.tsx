import Button from '@/components/ui/button';
import { classNameProps } from '@/types/className';
import Link from 'next/link';

export const Navigation = ({ className }: classNameProps) => {
  return (
    <nav className={className}>
      <ul className={`hover:[&>*]:text-tertiary flex items-center gap-x-4 font-medium text-white`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/todo">Todo</Link>
        </li>
        <li>
          <Button href="/login" variant="secondary">
            Sign in
          </Button>
        </li>
        <li>
          <Button href="/register" className="!bg-secondary-dark" disabled>
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
};
