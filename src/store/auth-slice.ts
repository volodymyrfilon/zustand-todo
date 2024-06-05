import { AuthState } from '@/types/auth';
import { login } from '@/utils/auth';
import { StateCreator } from 'zustand';

const initialAuthState: AuthState = {
  user: null,
  token: null,
  login: async (username: string, password: string) => {},
  logout: () => {},
  checkAuthorization: () => {},
};

export const createAuthSlice: StateCreator<AuthState, [], [], AuthState> = set => ({
  ...initialAuthState,
  login: async (username: string, password: string) => {
    const { token, user } = (await login(username, password)) as {
      token: string;
      user: { name: string };
    };
    set({ token, user });
  },
  logout: () => {
    sessionStorage.removeItem('authToken');
    set({ token: null, user: null });
  },
  checkAuthorization: () => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/unauthorized';
    }
  },
});
