import { useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, ZodSchema } from 'zod';


export const useCustomForm = <T extends ZodSchema>(validator: T) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  type FormData = TypeOf<T>;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isDirty,
    },
    reset,
  }: UseFormReturn<FormData> = useForm({
    resolver: zodResolver(validator),
    mode: 'all',
  });

  useEffect(() => {
    setIsDisabled(!(isValid && isDirty));
  }, [isValid, isDirty]);

  return {
    register,
    handleSubmit,
    errors,
    isDisabled,
    isLoading,
    setIsLoading,
    reset,
  };
};
