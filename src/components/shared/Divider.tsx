import styles from '@styles/divider.module.scss';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Divider = ({ className, ...props }: IDividerProps) =>
  <div className={clsx(styles.divider, className)} {...props}></div>;

