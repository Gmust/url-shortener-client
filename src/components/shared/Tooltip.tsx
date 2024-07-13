import * as React from 'react';
import { ReactNode } from 'react';
// @ts-ignore
import clsx from 'clsx';
import styles from '../../styles/tooltip.module.scss';

interface Props {
  tooltipText: string,
  position: 'right' | 'top' | 'bottom' | 'left',
  textSize?: 'sm' | 'md' | 'lg',
  children: ReactNode
}


export const Tooltip = ({ tooltipText, textSize, position, children }: Props) => <div
  className={styles.tooltipContainer}>
  {children}
  <div className={
    clsx(
      styles.tooltipText,
      position == 'right' && styles.right,
      position == 'top' && styles.top,
      position == 'left' && styles.left,
      position == 'bottom' && styles.bottom,
    )}>
    <p className={
      clsx(
        textSize == 'sm' && styles.textSm,
        textSize == 'md' && styles.textMd,
        textSize == 'lg' && styles.textLg,
      )
    }>
      {tooltipText}
    </p>
  </div>
</div>;

