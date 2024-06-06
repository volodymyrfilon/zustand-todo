'use client';

import { useStore } from '@/store';
import { ComponentType, useEffect } from 'react';

export const withAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const token = useStore(state => state.token);
    const checkAuthorization = useStore(state => state.checkAuthorization);

    useEffect(() => {
      checkAuthorization();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
