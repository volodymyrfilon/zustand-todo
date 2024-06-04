import { InputProps } from '@/types/formTypes/input';
import { Input, PasswordInput } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';

export const PasswordTypeInput = ({
  disabled = false,
  withAsterisk = false,
  label,
  description,
  error,
  placeholder,
  onChange,
}: InputProps) => {
  const iconLeft = <IconLock size={18} stroke={1.5} />;

  return (
    <PasswordInput
      withAsterisk={withAsterisk}
      leftSection={iconLeft}
      description={description}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export const TextTypeInput = ({
  label,
  withAsterisk = false,
  disabled = false,
  description,
  error,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <Input.Wrapper
      label={label}
      withAsterisk={withAsterisk}
      description={description}
      error={error}
    >
      <Input placeholder={placeholder} disabled={disabled} onChange={onChange} />
    </Input.Wrapper>
  );
};

export const EmailTypeInput = ({
  label,
  withAsterisk = false,
  disabled = false,
  description,
  error,
  placeholder,
  onChange,
}: InputProps) => {
  const iconLeft = <IconAt size={18} stroke={1.5} />;

  return (
    <Input.Wrapper
      label={label}
      withAsterisk={withAsterisk}
      description={description}
      error={error}
    >
      <Input
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        leftSection={iconLeft}
      />
    </Input.Wrapper>
  );
};

export default { PasswordTypeInput, TextTypeInput };
