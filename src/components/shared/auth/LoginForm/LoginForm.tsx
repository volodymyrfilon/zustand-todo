'use client';

import { Button, CloseButton, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconAt, IconLock, IconLogin2 } from '@tabler/icons-react';
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
      username: isNotEmpty('Username cannot be empty (hint: try "user")'),
      password: isNotEmpty('Enter your password (hint: try "password")'),
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
      router.push('/todo');
    } catch (err) {
      setError('Invalid credentials :(');
    } finally {
      form.reset();
      setSigningIn(false);
    }
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleSubmit(values, event))}
      className={`flex flex-col gap-y-4 ${className}`}
    >
      <TextInput
        label="Username"
        placeholder="Enter 'user'"
        leftSection={<IconAt size={16} stroke={1.5} />}
        rightSectionPointerEvents="all"
        key={form.key('username')}
        {...form.getInputProps('username')}
        rightSection={
          <CloseButton
            className="cursor-pointer"
            size={18}
            aria-label="Clear input"
            onClick={() => form.setFieldValue('username', '')}
          />
        }
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Enter 'password'"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <Button
        className="transition-all duration-300"
        type="submit"
        disabled={signingIn}
        rightSection={<IconLogin2 size={18} stroke={1.5} />}
      >
        {!signingIn ? 'Sign in' : 'Signing in...'}
      </Button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
};
