export type InputProps = {
  label: string;
  value: string;
  type?: 'text' | 'password';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  id?: string;
  className?: string;
};
