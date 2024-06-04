'use client';

import { PasswordTypeInput, TextTypeInput } from '@/components/ui/formElements/input';
import { login } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push('/todo');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <TextTypeInput
          label="E-mail"
          withAsterisk={true}
          placeholder="Enter e-mail"
          // error="Invalid e-mail"
          onChange={e => setUsername(e.target.value)}
        />
        <PasswordTypeInput
          label="Password"
          withAsterisk={true}
          placeholder="Enter password"
          // error="Invalid password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full rounded bg-blue-500 px-3 py-2 text-white">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default page;
