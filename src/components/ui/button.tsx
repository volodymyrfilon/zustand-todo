import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'disabled';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  icon,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
}) => {
  const baseStyle = `inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-tertiary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-tertiary',
    accent: 'bg-accent text-primary hover:bg-accent-dark focus:ring-tertiary',
    disabled: 'bg-gray-300 text-gray-700 cursor-not-allowed focus:ring-primary-dark',
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
    <button className={combinedStyles} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
