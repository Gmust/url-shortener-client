import { z } from 'zod';
import { loginValidator } from '../../utils/validators/login';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useToast } from '../../hooks/useToast';

import styles from '@utils/auth/auth.module.scss';
import { Divider } from '@components/shared/Divider';
import { Input } from '@components/shared/Input';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@components/shared/Button';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions } from '../../@types/toast';
import clsx from 'clsx';

type form = z.infer<typeof loginValidator>

export const Login = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toasts, addToast, removeToast } = useToast();

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm<form>({
    resolver: zodResolver(loginValidator),
    mode: 'all',
  });

  useEffect(() => {
    if (isValid && isDirty) {
      setIsDisabled(false);
    }
    if (!isValid) {
      setIsDisabled(true);
    }
  }, [isValid, isDirty]);

  const handleDisabledEvent = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (data: form) => {
    setIsLoading(true);
    try {

    } catch (e) {

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.form} style={{ marginTop: '2%' }}>
        <h1>Login</h1>
        <span style={{ marginTop: '10px' }}>Log in to your account to continue using of extended features</span>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email:</label>
            <Input autoComplete="email" size="md" Icon={MdOutlineEmail} variant="rounded" {...register('email')}
                   id="email" />
            <p  className={clsx(styles.errorMessage, errors.email && styles.visible)}>{errors.email && errors.email.message}</p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            <Input autoComplete="new-password" size="md" Icon={RiLockPasswordLine}
                   variant="rounded" {...register('password')} id="password" type="password" />
            <p className={clsx(styles.errorMessage, errors.password && styles.visible)}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className={styles.submitContainer}>
            <p>Don`t have an account? <a href="/auth/register">Create it!</a></p>
            <Button
              type="submit"
              variant="pink"
              disabled={isDisabled}
              aria-disabled={isDisabled}
              onClick={isDisabled && handleDisabledEvent}
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>
        </form>
        <Divider />
        <ToastList position={ToastPositions.TopLeft} removeToast={removeToast} data={toasts} />
      </div>
    </div>
  );
};

