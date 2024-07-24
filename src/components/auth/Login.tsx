import { z } from 'zod';
import { loginValidator } from '@utils/validators/login';
import {  useState } from 'react';
import { useToast } from '../../hooks/useToast';

import styles from '@utils/auth/auth.module.scss';
import { Divider } from '@components/shared/Divider';
import { Input } from '@components/shared/Input';

import { MdError, MdOutlineEmail, MdOutlinePersonOff } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@components/shared/Button';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions, ToastTypes } from '../../@types/toast';
import { VscVerified } from 'react-icons/vsc';
import { handleDisabledEvent } from '@utils/handleDisableEvent';
import { useCustomForm } from '../../hooks/useCustomForm';
import { FormHookErrorMessage } from '@components/shared/FormHookErrorMessage';
import { AuthService } from '../../service/auth';

type form = z.infer<typeof loginValidator>

export const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { toasts, addToast, removeToast } = useToast();

  const {
    errors,
    isLoading,
    setIsLoading,
    reset,
    register,
    handleSubmit,
    isDisabled,
  } = useCustomForm(loginValidator);

  const onSubmit = async (data: form) => {
    setIsLoading(true);
    try {
      const response = await AuthService.localLogin({
        email: data.email,
        password: data.password,
      });

      if (response.status === 401) {
        addToast({
          removing: true,
          message: 'Invalid Credentials',
          headingText: 'Unauthenticated',
          type: ToastTypes.Warning,
          Icon: MdOutlinePersonOff,
        });
      } else if (response.status === 201 || 201) {
        addToast({
          removing: true,
          message: 'User successfully logged in, you will be redirected shortly...',
          type: ToastTypes.Success,
          Icon: VscVerified,
        });
        reset();
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } catch (e) {
      addToast({
        removing: true,
        message: 'Something went wrong',
        headingText: 'Server Error',
        type: ToastTypes.Error,
        Icon: MdError,
      });
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
            <FormHookErrorMessage error={errors.email} />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.passwordShow}>
              <label htmlFor="password">Password:</label>
              <div className={styles.checkboxContainer}>
                <label htmlFor="show-password">Show password:</label>
                <input id="show-password" type="checkbox" onClick={() => setIsShowPassword(!isShowPassword)} />
              </div>
            </div>
            <Input autoComplete="new-password" size="md" Icon={RiLockPasswordLine}
                   variant="rounded" {...register('password')} id="password"
                   type={isShowPassword ? 'text' : 'password'} />
            <FormHookErrorMessage error={errors.password} />
          </div>
          <div className={styles.submitContainer}>
            <div>
              <p>Don`t have an account? <a href="/auth/register">Create it!</a></p>
              <p>Forgot password? <a href="/auth/forgot-password">Reset it it!</a></p>
            </div>
            <Button
              type="submit"
              variant="pink"
              disabled={isDisabled || isLoading}
              aria-disabled={isDisabled}
              onClick={isDisabled ? handleDisabledEvent : null}
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

