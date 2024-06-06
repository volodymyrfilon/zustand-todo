'use client';
import Button from '@/components/ui/button';
import { Logo } from '@/layouts/Logo';
import { useStore } from '@/store';
import { classNameProps } from '@/types/className';
import { IconKey, IconLogin2, IconLogout, IconMenuDeep, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const MobileNavigation = ({ className }: classNameProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token, user, logout } = useStore(
    useShallow(state => ({
      token: state.token,
      user: state.user,
      logout: state.logout,
    }))
  );

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
        className={`fixed inset-0 z-50 bg-black/50 ${menuOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu}
      />

      <nav
        className={`fixed bottom-0 right-0 top-0 z-[99] transform overflow-hidden bg-primary px-6 py-4 transition-all duration-300 ease-in-out ${menuOpen ? 'visible w-4/5' : 'invisible w-0 translate-x-full'}`}
      >
        <Logo />
        <Button
          className="absolute right-6 top-4 !p-0.5"
          ariaLabel="Close menu"
          onClick={closeMenu}
        >
          <IconX size={24} stroke={1.5} color="white" />
        </Button>
        <ul className="mt-20 flex flex-col text-white [&>*]:border-b [&>*]:border-primary-dark [&>*]:py-2.5 [&>*]:pl-4 [&>*]:text-lg [&>*]:font-medium">
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
          {user && token ? (
            <Button
              onClick={logout}
              ariaLabel="Logout"
              variant="accent"
              icon={<IconLogout size={20} stroke={1.5} />}
            >
              Log out
            </Button>
          ) : (
            <>
              <Button
                href="/login"
                ariaLabel="Sign in"
                variant="accent"
                icon={<IconLogin2 size={20} stroke={1.5} />}
                onClick={closeMenu}
              >
                Sign in
              </Button>
              <Button
                className="!bg-accent-dark"
                ariaLabel="Sign up"
                icon={<IconKey size={20} stroke={1.5} />}
                disabled
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
