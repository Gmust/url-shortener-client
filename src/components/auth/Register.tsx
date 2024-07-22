import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidator } from '../../utils/validators/register';
import styles from '@utils/auth/auth.module.scss';
import { Input } from '@components/shared/Input';

import { MdError, MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { PiPerson, PiPersonFill } from 'react-icons/pi';
import { Button } from '@components/shared/Button';
import { Divider } from '@components/shared/Divider';
import { useEffect, useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions, ToastTypes } from '../../@types/toast';
import clsx from 'clsx';
import { AuthService } from '../../service/auth';
import { VscVerified } from 'react-icons/vsc';
import { AxiosError } from 'axios';

type form = z.infer<typeof registerValidator>

export const Register = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toasts, addToast, removeToast } = useToast();

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm<form>({
    resolver: zodResolver(registerValidator),
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
      const response = await AuthService.registerAccount({
        email: data.email,
        name: data.name,
        surname: data.surname,
        password: data.password,
      });

      addToast({
        removing: true,
        message: response.message,
        type: ToastTypes.Success,
        Icon: VscVerified,
      });
      reset();
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        addToast({
          removing: true,
          message: e.response.data.message,
          headingText: `${e.response.data.error} ${e.response.data.statusCode}`,
          type: ToastTypes.Error,
          Icon: MdError,
        });
      } else {
        addToast({
          removing: true,
          message: 'Something went wrong',
          headingText: 'Server Error',
          type: ToastTypes.Error,
          Icon: MdError,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <h1>Registration</h1>
        <span>Create an account to receive extended features</span>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fullNameContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name:</label>
              <Input autoComplete="given-name" size="md" Icon={PiPerson} variant="rounded"  {...register('name')}
                     id="name" />
              <p className={clsx(styles.errorMessage, errors.name && styles.visible)}>
                {errors.name && errors.name.message}
              </p>
            </div>
            <div className={styles.inputContainer} style={{ 'marginLeft': '10px' }}>
              <label htmlFor="surname">Surname:</label>
              <Input autoComplete="family-name" size="md" Icon={PiPersonFill} variant="rounded" {...register('surname')}
                     id="surname" />
              <p className={clsx(styles.errorMessage, errors.surname && styles.visible)}>
                {errors.surname && errors.surname.message}
              </p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email:</label>
            <Input autoComplete="email" size="md" Icon={MdOutlineEmail} variant="rounded" {...register('email')}
                   id="email" />
            <p className={clsx(styles.errorMessage, errors.email && styles.visible)}>
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            <Input autoComplete="new-password" size="md" Icon={RiLockPasswordLine}
                   variant="rounded" {...register('password')} id="password" type="password" />
            <p className={clsx(styles.errorMessage, errors.password && styles.visible)}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Input size="md" Icon={RiLockPasswordFill} variant="rounded" {...register('confirmPassword')}
                   id="confirmPassword" type="password" />
            <p className={clsx(styles.errorMessage, errors.confirmPassword && styles.visible)}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </p>
          </div>
          <div className={styles.submitContainer}>
            <p>Already have an account? <a href="login">Login!</a></p>
            <Button
              type="submit"
              variant="pink"
              disabled={isDisabled || isLoading}
              aria-disabled={isDisabled}
              onClick={isDisabled ? handleDisabledEvent : null}
              isLoading={isLoading}
            >
              Register
            </Button>
          </div>
        </form>
        <Divider style={{ 'marginTop': '10px' }} />
        <ToastList position={ToastPositions.TopLeft} removeToast={removeToast} data={toasts} />
      </div>
    </div>
  )
    ;
};

