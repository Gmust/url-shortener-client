import styles from '@styles/footer.module.scss';
import { ToastList } from '@components/shared/toast/ToastList';
import { useToast } from '../../hooks/useToast';
import { ToastPositions, ToastTypes } from '../../@types/toast';
import { ImChrome } from 'react-icons/im';


export const Footer = () => {

  const { toasts, removeToast, addToast } = useToast();


  return (
    <div className={styles.footerContainer}>
      Footer
      <button onClick={() => {
        addToast({
          type: ToastTypes.Success,
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus magni nam nobis placeat sint\n' +
            '        voluptas! ',
        });
      }}>
      {ToastTypes.Success}</button>
      <button onClick={() => {
        addToast({
          type: ToastTypes.Warning,
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus magni nam nobis placeat sint\n' +
            '        voluptas! ',
        });
      }}>{ToastTypes.Warning}</button>
      <button onClick={() => {
        addToast({
          type: ToastTypes.Error,
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus magni nam nobis placeat sint\n' +
            '        voluptas! ',
        });
      }}>{ToastTypes.Error}</button>
      <button onClick={() => {
        addToast({
          type: ToastTypes.Default,
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus magni nam nobis placeat sint\n' +
            '        voluptas! ',
          headingText: "test text",
          Icon: ImChrome
        });
      }}>{ToastTypes.Default}</button>
      <ToastList position={ToastPositions.TopLeft} data={toasts} removeToast={removeToast} />
    </div>
  );
};

