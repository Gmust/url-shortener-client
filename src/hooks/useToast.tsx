import { useState } from 'react';
import { IToast } from '../@types/toast';

export const useToast = () => {

  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = ({ Icon, type, message }: Omit<IToast, 'id'>) => {
    const newToast: IToast = {
      id: new Date().getTime().toString(),
      type,
      message,
      Icon,
    };

    setToasts((prevState) => [...prevState, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 10000);
  };

  const removeToast = (id: string) => {
    setToasts((prevState) => prevState.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};
