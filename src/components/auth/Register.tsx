import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidator } from '../../utils/validators/register';
import styles from '@styles/auth/register.module.scss';
import { Input } from '@components/shared/Input';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { PiPerson, PiPersonFill } from 'react-icons/pi';
import { Button } from '@components/shared/Button';
import { Divider } from '@components/shared/Divider';
import { useEffect, useState } from 'react';

type form = z.infer<typeof registerValidator>

export const Register = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

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

  const onSubmit = () => {

  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h1>Registration</h1>
        <span>Create account to receive extended features</span>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fullNameContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name:</label>
              <Input autoComplete="given-name" size="md" Icon={PiPerson} variant="rounded"  {...register('name')}
                     id="name" />
              <p className={styles.errorMessage}>{errors.name && errors.name.message}</p>
            </div>
            <div className={styles.inputContainer} style={{ 'marginLeft': '10px' }}>
              <label htmlFor="surname">Surname:</label>
              <Input autoComplete="family-name" size="md" Icon={PiPersonFill} variant="rounded" {...register('surname')}
                     id="surname" />
              <p className={styles.errorMessage}>{errors.surname && errors.surname.message}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email:</label>
            <Input autoComplete="email" size="md" Icon={MdOutlineEmail} variant="rounded" {...register('email')}
                   id="email" />
            <p className={styles.errorMessage}>{errors.email && errors.email.message}</p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            <Input autoComplete="new-password" size="md" Icon={RiLockPasswordLine}
                   variant="rounded" {...register('password')} id="password" type="password" />
            <p className={styles.errorMessage}>{errors.password && errors.password.message}</p>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Input size="md" Icon={RiLockPasswordFill} variant="rounded" {...register('confirmPassword')}
                   id="confirmPassword" type="password" />
            <p className={styles.errorMessage}>{errors.confirmPassword && errors.confirmPassword.message}</p>
          </div>
          <div className={styles.submitContainer}>
            <p>Already have an account? <a href="login">Login!</a></p>
            <Button
              type="submit"
              variant="pink"
              disabled={isDisabled}
              aria-disabled={isDisabled}
              onClick={isDisabled && handleDisabledEvent}
            >
              Register
            </Button>
          </div>
        </form>
        <Divider style={{ 'marginTop': '10px' }} />
      </div>
    </div>
  )
    ;
};

