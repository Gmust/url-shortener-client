import { Toast } from '@components/shared/toast/Toast';
import styles from '@styles/toast.module.scss';
// @ts-ignore
import clsx from 'clsx';
import { IToast, ToastPositions } from '../../../@types/toast';
import { useEffect, useRef } from 'react';

interface IToastListProps {
  position: ToastPositions,
  removeToast: (id: string) => void;
  data: IToast[];
}


export const ToastList = ({ removeToast, position, data }: IToastListProps) => {

  const listRef = useRef<HTMLDivElement>(null);

  const handleScrolling = () => {
    const el = listRef.current;

    if (!el) return;

    if (position.includes('bottom')) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    } else {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScrolling();
  }, [data]);

  const sortedData = position.includes('bottom') ? [...data].reverse() : [...data];

  return (
    sortedData.length > 0 && (
      <div className={clsx(
        styles.toastList,
        position === 'top-left' && styles.topLeft,
        position === 'top-right' && styles.topRight,
        position === 'bottom-left' && styles.bottomLeft,
        position === 'bottom-right' && styles.bottomRight,
      )}
           aria-live="assertive"
      >
        {data.map((toast) =>
          <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} onClose={removeToast} />,
        )}
      </div>
    )
  );
};

