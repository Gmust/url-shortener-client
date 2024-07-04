import styles from '@styles/pop-up.module.scss';

interface IPopUpProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  children: React.ReactNode;
}

export const Modal = ({ setIsActive, isActive, children }: IPopUpProps) => {

  if (!isActive) return null;
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.open : ''}`} onClick={() => setIsActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={() => setIsActive(false)}>X</button>
        {children}
      </div>
    </div>
  );
};
