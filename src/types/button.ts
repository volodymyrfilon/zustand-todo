export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'disabled';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
