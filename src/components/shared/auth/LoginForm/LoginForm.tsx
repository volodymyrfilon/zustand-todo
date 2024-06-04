'use client';

import { Button, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconAt, IconLock, IconLogin2, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { classNameProps } from '@/types/className';
import { login } from '@/utils/auth';

export const LoginForm = (className: classNameProps) => {
  const router = useRouter();
  const [signingIn, setSigningIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: isNotEmpty('Username cannot be empty'),
      password: isNotEmpty('Enter your password'),
    },
  });

  const handleSubmit = async (
    values: typeof form.values,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    if (!event) return;

    event.preventDefault();
    const { username, password } = values;

    try {
      setSigningIn(true);
      await login(username, password);
      form.reset();
      setSigningIn(false);
      router.push('/todo');
    } catch (err) {
      setSigningIn(false);
      setError('Invalid credentials');
    }
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleSubmit(values, event))}
      className={`flex flex-col gap-y-4 ${className}`}
    >
      <TextInput
        label="Username"
        placeholder="Enter username"
        leftSection={<IconAt size={16} stroke={1.5} />}
        rightSectionPointerEvents="all"
        key={form.key('username')}
        {...form.getInputProps('username')}
        rightSection={
          <IconX
            className="cursor-pointer"
            size={16}
            stroke={1.5}
            aria-label="Clear input"
            onClick={() => (form.values.username = '')}
          />
        }
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Enter password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <Button type="submit" rightSection={<IconLogin2 size={18} stroke={1.5} />}>
        {!signingIn ? 'Sign in' : 'Signing in...'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
