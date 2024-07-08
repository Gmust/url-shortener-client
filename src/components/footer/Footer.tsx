import styles from '@styles/footer.module.scss';
import { ToastList } from '@components/shared/toast/ToastList';
import { useToast } from '../../hooks/useToast';
import { ToastPositions, ToastTypes } from '../../@types/toast';


export const Footer = () => {

  const { toasts, removeToast, addToast } = useToast();

  const handleAddToast = () => {
    addToast({
      type: ToastTypes.Success,
      message: 'Test',
    });
  };

  return (
    <div className={styles.footerContainer}>
      Footer
      <button onClick={handleAddToast}>dd</button>
      <ToastList position={ToastPositions.TopLeft} data={toasts} removeToast={removeToast} />
    </div>
  );
};

