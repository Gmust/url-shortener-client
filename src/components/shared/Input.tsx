import { cva, VariantProps } from 'class-variance-authority';
import styles from '@styles/input.module.scss';
import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import { IconType } from 'react-icons';
//@ts-ignore
import clsx from 'clsx';

const inputVariants = cva(styles.default, {
  variants: {
    variant: {
      default: '',
      rounded: styles.rounded,
    },
    size: {
      md: styles.mdSize,
      sm: styles.smallSize,
      lg: styles.largeSize,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
  isLoading?: boolean;
  Icon?: IconType;
}

export const Input = forwardRef(({
                                   Icon,
                                   isLoading,
                                   variant,
                                   size,
                                   className,
                                   ...props
                                 }: IInputProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <>
        {
          Icon ?
            <div className={styles.iconInput}>
            <span>
              <Icon />
            </span>
              <input className={clsx(inputVariants({ className, size, variant }), styles.rounded)} disabled={isLoading}
                     ref={ref} {...props} />
            </div>
            :
            <input className={clsx(inputVariants({ className, size, variant }))} disabled={isLoading}
                   ref={ref} {...props} />
        }
      </>
    );
  },
);

