import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="logo-animation text-2xl font-black uppercase">
      <span className="text-tertiary">Zustand</span> <span className="text-white">todo</span>
    </Link>
  );
};
