import { ChangeEvent } from 'react';

export type InputProps = {
  withAsterisk?: boolean;
  disabled?: boolean;
  label: string;
  placeholder: string;
  error?: string;
  description?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
