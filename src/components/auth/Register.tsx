import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidator } from '../../utils/validators/register';
import styles from '@styles/auth/register.module.scss';
import { Input } from '@components/shared/Input';
import { Fa4 } from 'react-icons/fa6';
import { ImChrome } from 'react-icons/im';

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
            <Input size='md' Icon={ImChrome} variant='rounded' />
          </div>
          <div>
            <Input size='sm'  Icon={ImChrome} />
          </div>
          <div>
            <Input size='lg'  Icon={ImChrome} />
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  );
};

