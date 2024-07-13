import { RiFileCopy2Fill } from 'react-icons/ri';
import { IUrl } from '../../../@types/url';
import { formatDate } from '../../../utils/formatDate';
import styles from '@styles/urlsTable/table-row.module.scss';
import { FaLink } from 'react-icons/fa6';
import { FaLinkSlash } from 'react-icons/fa6';
// @ts-ignore
import clsx from 'clsx';
import { Tooltip } from '@components/shared/Tooltip';

export const TableRow = (url: IUrl) => {
  return (
    <tr className={styles.rowContainer}>
      <td className={styles.shortLink}>
        <a href={url.shortUrl} target="_blank">{url.shortUrl}</a>
        <Tooltip tooltipText='Copy short link' position='left'>
          <RiFileCopy2Fill className={styles.icon} />
        </Tooltip>
      </td>
      <td>
        <a href={url.originalUrl} target="_blank">{url.originalUrl}</a>
      </td>
      <td>{url.clicks}</td>
      <td>{url.maxClicks ? url.maxClicks : '---'}</td>
      <td>
        {url.isActive ?
          <span className={`${styles.urlStatus} ${styles.active}`}>
            Active
            <Tooltip tooltipText="Click to deactivate link" position="right">
              <FaLink className={styles.icon} />
            </Tooltip>
          </span>
          : <span className={clsx(styles.urlStatus, styles.inactive)}>
            Inactive
            <Tooltip tooltipText="Click to activate link" position="right">
               <FaLinkSlash className={styles.icon} />
            </Tooltip>
          </span>
        }
      </td>
      <td>{formatDate(url.createdAt)}</td>
    </tr>
  );
};

