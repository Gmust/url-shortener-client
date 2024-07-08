import { IconType } from 'react-icons';
import styles from '@styles/toast.module.scss';
// @ts-ignore
import clsx from 'clsx';
import { ImChrome } from 'react-icons/im';
import { CgClose } from 'react-icons/cg';
import { useRef } from 'react';
import { IToast } from '../../../@types/toast';

interface IToastProps extends IToast {
  onClose: (id: string) => void;
}

export const Toast = ({ Icon, type, id, message, onClose }: IToastProps) => {


  return (
    <div className={clsx(styles.toast)} role="alert">
      <div className={styles.message}>
        <ImChrome />
        <p>{message}</p>
      </div>
      <button className={styles.closeButton} onClick={() => onClose(id)}>
        <CgClose />
      </button>
    </div>
  );
};

