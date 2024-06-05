export type ButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'disabled';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
