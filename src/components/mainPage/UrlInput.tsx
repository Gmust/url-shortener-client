
import styles from '@styles/mainPage/url-input.module.scss'
import { FaLink } from 'react-icons/fa';
import { Button } from '@components/shared/Button';

export const UrlInput = () => {
  return (
    <div className={styles.urlInputWrapper}>
      <FaLink  className={styles.icon}/>
      <input placeholder="Enter your link here..."/>
      <Button>
        Shorten now!
      </Button>
    </div>
  );
};

