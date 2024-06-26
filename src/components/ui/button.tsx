import { ButtonProps } from '@/types/button';
import Link from 'next/link';

const Button = ({
  children,
  href,
  icon,
  ariaLabel,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseStyle = `inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
    disabled: 'bg-neutralColor text-neutralColor-dark cursor-not-allowed focus:ring-neutralColor',
  };

  const combinedStyles = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={disabled ? undefined : onClick}>
        {children}
        {icon && <span className="ml-1.5">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={combinedStyles}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
      {icon && <span className="ml-1.5">{icon}</span>}
    </button>
  );
};

export default Button;
