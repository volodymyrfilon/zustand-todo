'use client';

import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { ComponentType, useEffect } from 'react';

export const withAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const token = useStore(state => state.token);

    useEffect(() => {
      if (!token) {
        router.replace('/unauthorized');
      }
    }, [token, router]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
