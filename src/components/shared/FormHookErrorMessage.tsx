import clsx from 'clsx';
import styles from '@styles/auth/auth.module.scss';

export const FormHookErrorMessage = ({ error }) => {
  return <p className={clsx(styles.errorMessage, error && styles.visible)}>
    {error?.message}
  </p>;
};
