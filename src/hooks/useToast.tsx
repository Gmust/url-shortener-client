import { useState } from 'react';
import { IToast } from '../@types/toast';

export const useToast = () => {

  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = ({ Icon, type, message, headingText }: Omit<IToast, 'id'>) => {
    const newToast: IToast = {
      id: new Date().getTime().toString(),
      type,
      message,
      Icon,
      headingText,
    };

    setToasts((prevState) => [...prevState, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 5000);
  };

  const removeToast = (id: string) => {

    setToasts((prevState)=>
      prevState.map(toast =>
          toast.id === id ? {...toast, removing: true} : toast
      )
    )

    setTimeout(()=> {
      setToasts((prevState) => prevState.filter(toast => toast.id !== id));
    }, 500)
  };

  return { toasts, addToast, removeToast };
};
