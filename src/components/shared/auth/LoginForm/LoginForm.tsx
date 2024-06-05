'use client';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useStore } from '@/store';
import { classNameProps } from '@/types/className';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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
  const login = useStore(state => state.login);

  const validateForm = () => {
    const { username, password } = formData;
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
    } finally {
      setFormData({
        username: '',
        password: '',
      });
      setSigningIn(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-80 flex-col gap-y-4 ${className}`}>
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
        className="bg-primary rounded p-2 text-white transition-all duration-300"
      >
        {!signingIn ? 'Sign in' : 'Signing in...'}
      </Button>
      {errors.rootError && <p className="text-sm text-red-500">{errors.rootError}</p>}
    </form>
  );
};
