'use client';
import Button from '@/components/ui/button';
import { Logo } from '@/layouts/Logo';
import { classNameProps } from '@/types/className';
import { IconMenuDeep, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const MobileNavigation = ({ className }: classNameProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <IconMenuDeep
        className={`cursor-pointer ${className}`}
        size={24}
        stroke={2}
        color="white"
        onClick={toggleMenu}
      />

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu}
      />

      <nav
        className={`bg-primary fixed bottom-0 right-0 top-0 transform overflow-hidden px-6 py-4 transition-all duration-300 ease-in-out ${menuOpen ? 'visible w-4/5' : 'invisible w-0 translate-x-full'}`}
      >
        <Logo />
        <Button className="absolute right-6 top-4 !p-0.5" onClick={closeMenu}>
          <IconX size={28} stroke={1.5} color="black" />
        </Button>
        <ul className="[&>*]:border-primary-dark text-secondary-dark mt-20 flex flex-col [&>*]:border-b [&>*]:py-2.5 [&>*]:pl-2 [&>*]:text-lg [&>*]:font-medium">
          <li className="border-t">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/todo" onClick={closeMenu}>
              Todo
            </Link>
          </li>
        </ul>
        <div className="mt-20 flex gap-x-5">
          <Button className="w-full flex-1" href="/login" variant="secondary" onClick={closeMenu}>
            Sign in
          </Button>
          <Button className="!bg-secondary-dark w-full flex-1" disabled onClick={closeMenu}>
            Sign up
          </Button>
        </div>
      </nav>
    </>
  );
};
