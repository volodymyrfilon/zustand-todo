import { InputProps } from '@/types/input';

export const Input = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = '',
  id,
  className = '',
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-primary mb-2 font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`focus:ring-primary-dark w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
