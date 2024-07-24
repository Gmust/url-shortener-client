import clsx from 'clsx';
import styles from '@styles/auth/auth.module.scss';

export const FormHookErrorMessage = ({ error }) => {

  console.log('in component', error);

  return <p className={clsx(styles.errorMessage, error && styles.visible)}>
    {error?.message}
  </p>;
};
