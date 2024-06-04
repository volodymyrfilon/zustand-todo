export const login = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve({ token: 'fake-token', user: { name: 'user' } });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
