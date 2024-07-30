import { IPopUpProps, Modal } from '@components/shared/Modal';
import styles from '@styles/urlsTable/clear-links-modal.module.scss';
import { Button } from '@components/shared/Button';
import { removeUrls } from '@store/urlsStore';

export const ClearLinksModal = ({ setIsActive, isActive }: Omit<IPopUpProps, 'children'>) => {
  return (
    <Modal setIsActive={setIsActive} isActive={isActive}>
      <div className={styles.deleteLinksContainer}>
        <h3>Are you sure you want to delete all links?</h3>
        <span className={styles.modalText}>
         <p>
         Want to remove only one link from list?
         </p>
         <a href="/auth/register">
           Create account
         </a>
        </span>
      </div>
      <span className={styles.buttonsContainer}>
          <Button variant="pink" onClick={() => setIsActive(false)}>
            Decline
          </Button>
          <Button variant="primary" onClick={() => {
            removeUrls();
            setIsActive(false);
          }}>
            Clear all
          </Button>
      </span>
    </Modal>
  );
};

