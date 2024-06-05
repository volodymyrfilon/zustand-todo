'use client';

import { checkAuthorization } from '@/utils/auth';

export const CheckAuth = () => {
  return checkAuthorization();
};
