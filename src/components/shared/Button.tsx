import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { TbLoader3 } from 'react-icons/tb';
import styles from '@styles/button.module.scss';
// @ts-ignore
import clsx from 'clsx';

export const buttonVariants = cva(
  styles.default,
  {
    variants: {
      variant: {
        primary: styles.primary,
        secondary: styles.secondary,
      },
      size: {
        md: styles.mdSize,
        sm: styles.smallSize,
        lg: styles.largeSize,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = ({ className, children, variant, isLoading, size, ...props }: ButtonProps) => (
  <button className={clsx(buttonVariants({ variant, size }), className)} disabled={isLoading} {...props}>
    {isLoading ? <TbLoader3 className={styles.loaderIcon} /> : null}
    {children}
  </button>
);
