import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidator } from '../../utils/validators/register';
import styles from '@styles/auth/register.module.scss';
import { Input } from '@components/shared/Input';

type form = z.infer<typeof registerValidator>

export const Register = () => {


  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<form>({ resolver: zodResolver(registerValidator) });

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h1>Registration</h1>
        <span>Create account to receive extended features</span>
        <form>
          <div>
            <Input />
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  );
};

