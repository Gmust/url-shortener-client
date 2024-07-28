import { RiFileCopy2Fill } from 'react-icons/ri';
import { IUrl } from '../../../types/url';
import { formatDate } from '@utils/formatDate';
import styles from '@styles/urlsTable/table-row.module.scss';
import { FaLink, FaLinkSlash } from 'react-icons/fa6';
import clsx from 'clsx';
import { Tooltip } from '@components/shared/Tooltip';
import { useState } from 'react';
import { UrlsService } from '../../../service/urls';
import { updateUrl } from '@store/urlsStore';
import { useToast } from '../../../hooks/useToast';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions, ToastTypes } from '../../../types/toast';

export const TableRow = (url: IUrl) => {
  const [link, setLink] = useState<IUrl>(url);
  const { toasts, addToast, removeToast } = useToast();

  const changeUrlStatus = async () => {
    try {
      const response = await UrlsService.changeUrlStatus({ urlId: link.urlId });
      const updatedUrl = { ...link, isActive: !link.isActive };
      setLink(updatedUrl);
      updateUrl(updatedUrl);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const copyShortLink = () => {
    navigator.clipboard.writeText(url.shortUrl);
    addToast({
      removing: true,
      message: url.shortUrl.toString(),
      headingText: 'Following url was copied',
      type: ToastTypes.Success,
    });
  };

  return (
    <>
      <tr className={styles.rowContainer}>
        <td className={styles.shortLink}>
          <a href={url.shortUrl} className={styles.truncateLink} target="_blank">{url.shortUrl}</a>
          <Tooltip tooltipText="Copy short link" position="left">
            <RiFileCopy2Fill className={styles.icon} onClick={copyShortLink} />
          </Tooltip>
        </td>
        <td>
          <a href={url.originalUrl} className={styles.truncateLink} target="_blank">{url.originalUrl}</a>
        </td>
        {link.clicks ? <td> {url.clicks} </td> : <td>0</td>}
        {link.maxClicks ? <td> {url.maxClicks} </td> : null}
        <td>
          {link.isActive ?
            <span className={`${styles.urlStatus} ${styles.active}`}>
            Active
            <Tooltip tooltipText="Click to deactivate link" position="right">
              <FaLink className={styles.icon} onClick={changeUrlStatus} />
            </Tooltip>
          </span>
            : <span className={clsx(styles.urlStatus, styles.inactive)}>
            Inactive
            <Tooltip tooltipText="Click to activate link" position="right">
               <FaLinkSlash className={styles.icon} onClick={changeUrlStatus} />
            </Tooltip>
          </span>
          }
        </td>
        <td>{formatDate(url.createdAt)}</td>
      </tr>
      <ToastList position={ToastPositions.TopLeft} removeToast={removeToast} data={toasts} />
    </>
  );
};

