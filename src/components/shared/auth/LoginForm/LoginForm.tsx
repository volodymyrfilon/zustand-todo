'use client';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useStore } from '@/store';
import { classNameProps } from '@/types/className';
import { IconLogin2 } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const LoginForm = ({ className }: classNameProps) => {
  const router = useRouter();
  const [signingIn, setSigningIn] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    usernameError: string;
    passwordError: string;
    rootError: string;
  }>({
    usernameError: '',
    passwordError: '',
    rootError: '',
  });
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const { token, user, login } = useStore(
    useShallow(state => ({
      token: state.token,
      user: state.user,
      login: state.login,
    }))
  );

  useEffect(() => {
    token && user ? router.push('/todo') : null;
  }, [token, user, router]);

  const validateForm = () => {
    const { username, password } = formData;
    if (!username && !password) {
      setErrors({
        ...errors,
        passwordError: 'Enter your password (hint: try "password")',
        usernameError: 'Username cannot be empty (hint: try "user")',
      });
      return false;
    }
    if (!username) {
      setErrors({ ...errors, usernameError: 'Username cannot be empty (hint: try "user")' });
      return false;
    }
    if (!password) {
      setErrors({ ...errors, passwordError: 'Enter your password (hint: try "password")' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    const { username, password } = formData;
    try {
      setSigningIn(true);
      await login(username, password);
      router.push('/todo');
    } catch (err) {
      setErrors({ ...errors, rootError: 'Invalid credentials :(' });
      setFormData({
        username: '',
        password: '',
      });
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-full flex-col gap-y-4 ${className}`}>
      <Input
        label="Username"
        value={formData.username}
        onChange={e => setFormData({ ...formData, username: e.target.value })}
        placeholder="Enter 'user'"
        error={formData.username ? '' : errors.usernameError}
      />
      <Input
        label="Password"
        type="password"
        value={formData.password}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        placeholder="Enter 'password'"
        error={formData.password ? '' : errors.passwordError}
      />
      <Button
        disabled={signingIn}
        variant="primary"
        ariaLabel="Sign in"
        className="rounded bg-primary p-2 text-white transition-all duration-300"
        icon={<IconLogin2 size={20} stroke={1.5} />}
      >
        {!signingIn ? 'Sign in' : 'Signing in...'}
      </Button>
      {errors.rootError && <p className="text-sm text-red-500">{errors.rootError}</p>}
    </form>
  );
};
