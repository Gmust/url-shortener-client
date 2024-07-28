import { z } from 'zod';
import { resetPasswordValidator } from '../../utils/validators/reset-password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import styles from '@styles/auth/auth.module.scss';
import { Divider } from '@components/shared/Divider';
import { useToast } from '../../hooks/useToast';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions, ToastTypes } from '../../types/toast';
import { Input } from '@components/shared/Input';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@components/shared/Button';
import { handleDisabledEvent } from '@utils/handleDisableEvent';
import { AuthService } from '../../service/auth';
import { MdError } from 'react-icons/md';
import { VscVerified } from 'react-icons/vsc';
import { AxiosError } from 'axios';
import { useCustomForm } from '../../hooks/useCustomForm';
import { FormHookErrorMessage } from '@components/shared/FormHookErrorMessage';

interface IResetPasswordProps {
  token: string,
  email: string
}

type form = z.infer<typeof resetPasswordValidator>;

export const ResetPassword = ({ email, token }: IResetPasswordProps) => {
  const { toasts, addToast, removeToast } = useToast();

  const {
    register,
    reset,
    errors,
    isLoading,
    setIsLoading,
    handleSubmit,
    isDisabled,
  } = useCustomForm(resetPasswordValidator);

  const onSubmit = async (data: form) => {
    if (!email || !token) {
      addToast({
        removing: true,
        type: ToastTypes.Error,
        Icon: MdError,
        headingText: 'Error',
        message: 'Error in resetting password, repeat  all actions again',
      });

      return;
    }
    setIsLoading(true);
    try {
      const response = await AuthService.resetPassword({
        email,
        resetToken: token,
        newPassword: data.confirmPassword,
      });
      addToast({
        removing: true,
        message: response.message,
        type: ToastTypes.Success,
        Icon: VscVerified,
      });
      reset();
      setTimeout(() => {
        window.location.replace('/auth/login');
      }, 3000);
    } catch (e) {
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
      <div className={styles.form} style={{ marginTop: '3%' }}>
        <h1>Reset you password</h1>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: '440px' }}>
          <div className={styles.inputContainer}>
            <label htmlFor="password">New password:</label>
            <Input id="password" {...register('password')} size="md" variant="rounded" Icon={RiLockPasswordLine}
                   isLoading={isLoading} type="password" />
            <FormHookErrorMessage error={errors.password} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="confirm-password">Repeat new password:</label>
            <Input id="confirm-password" {...register('confirmPassword')} isLoading={isLoading} size="md"
                   variant="rounded" Icon={RiLockPasswordFill} type="password" />
            <FormHookErrorMessage error={errors.confirmPassword} />
          </div>
          <div className={styles.submitContainer}>
            <Button
              type="submit"
              variant="pink"
              disabled={isDisabled || isLoading}
              aria-disabled={isDisabled}
              onClick={isDisabled ? handleDisabledEvent : null}
              isLoading={isLoading}
            >
              Reset password
            </Button>
          </div>
        </form>
      </div>
      <ToastList position={ToastPositions.TopLeft} removeToast={removeToast} data={toasts} />
    </div>
  );
};

