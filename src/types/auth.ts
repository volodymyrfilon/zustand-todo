export type AuthState = {
  user: { name: string } | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthorization: () => void;
};
