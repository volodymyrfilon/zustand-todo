export const login = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        const token = 'fake-token';
        const user = { name: 'User' };
        sessionStorage.setItem('authToken', token);
        resolve({ token, user });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const checkAuthorization = () => {
  const token = sessionStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/unauthorized';
  }
  return !!token;
};
