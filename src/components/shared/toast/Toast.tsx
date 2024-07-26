import { useEffect, useState } from 'react';
import { CgClose, CgCloseR } from 'react-icons/cg';
import { TbCircleCheck } from 'react-icons/tb';

4;
import { MdOutlineWarningAmber } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import styles from '@styles/toast.module.scss';
import { IToast, ToastTypes } from '../../../types/toast';
// @ts-ignore
import clsx from 'clsx';


interface IToastProps extends IToast {
  onClose: (id: string) => void;
}

export const Toast = ({ Icon, type, id, message, onClose, removing, headingText }: IToastProps) => {

  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  console.log('headingText', headingText);
  useEffect(() => {
    if (removing) {
      setIsRemoving(true);
    }
  }, [removing]);

  const iconMap = {
    success: <TbCircleCheck size={20} />,
    error: <RiErrorWarningLine size={20} />,
    warning: <MdOutlineWarningAmber size={20} />,
    default: Icon ? <Icon /> : <></>,
  };

  const toastIcon = iconMap[type] || null;

  return (
    <div className={clsx(styles.toast, isRemoving && styles.removing)} role="alert">
      <div
        className={clsx(
          styles.toastHeader,
          styles[type],
        )}
      >
        <div style={{ display: 'flex' }}>
          {toastIcon && <div className={styles.icon}>{toastIcon}</div>}
          <p>
            {headingText ? headingText :
              type.charAt(0).toUpperCase() + type.slice(1)
            }
          </p>
        </div>
        <button className={styles.closeButton} onClick={() => onClose(id)} aria-label="Close">
          <CgCloseR size={26} />
        </button>
      </div>
      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </div>
  );
};

