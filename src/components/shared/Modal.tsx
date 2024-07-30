import styles from '@styles/modal.module.scss';
import { Button } from '@components/shared/Button';
import { CgClose } from 'react-icons/cg';

export interface IPopUpProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  children: React.ReactNode;
}

export const Modal = ({ setIsActive, isActive, children }: IPopUpProps) => {
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.open : ''}`} onClick={() => setIsActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Button
          className={styles.modalClose}
          variant="primary"
          size="sm"
          onClick={() => setIsActive(false)}
        >
          <CgClose />
        </Button>
        {children}
      </div>
    </div>
  );
};
