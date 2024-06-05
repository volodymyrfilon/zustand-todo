'use client';

import Button from '@/components/ui/button';
import { useStore } from '@/store';
import { classNameProps } from '@/types/className';
import { IconKey, IconLogin2, IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import { useShallow } from 'zustand/react/shallow';

export const Navigation = ({ className }: classNameProps) => {
  const { token, user, logout } = useStore(
    useShallow(state => ({
      token: state.token,
      user: state.user,
      logout: state.logout,
    }))
  );

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
        {user && token ? (
          <li>
            <Button
              onClick={logout}
              ariaLabel="Logout"
              variant="secondary"
              icon={<IconLogout size={20} stroke={1.5} />}
            >
              Log out
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Button
                href="/login"
                ariaLabel="Sign in"
                variant="secondary"
                icon={<IconLogin2 size={20} stroke={1.5} />}
              >
                Sign in
              </Button>
            </li>
            <li>
              <Button
                className="!bg-secondary-dark"
                ariaLabel="Sign up"
                icon={<IconKey size={20} stroke={1.5} />}
                disabled
              >
                Sign up
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
