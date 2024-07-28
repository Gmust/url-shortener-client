import { useStore } from '@nanostores/react';
import { TableRow } from '@components/mainPage/urlsList/TableRow';
import { Tooltip } from '@components/shared/Tooltip';
import { $isAuth } from '@store/authStore';
import { $urls } from '@store/urlsStore';
import styles from '@styles/urlsTable/urls-table.module.scss';


export const UrlsTable = () => {

  const isAuth = useStore($isAuth);
  const urls = useStore($urls);

  return (
    <div className={styles.tableContainer}>
      {urls.length > 0 ? (
        <table>
          <thead>
          <tr>
            <th scope="col">
              <Tooltip tooltipText="Short link for your use" position="top" textSize="md">
                Short link
              </Tooltip>
            </th>
            <th scope="col">
              <Tooltip tooltipText="Original link for current shortened link" position="top" textSize="md">
                Original link
              </Tooltip>
            </th>
            {urls.some((link) => link.clicks) && (
              <th scope="col">
                <Tooltip tooltipText="Original link for current shortened link" position="top" textSize="md">
                  Clicks
                </Tooltip>
              </th>
            )}
            {urls.some((link) => link.maxClicks) && (
              <th scope="col">
                <Tooltip tooltipText="Predefined number of maximum clicks" position="top" textSize="md">
                  Max. Clicks
                </Tooltip>
              </th>
            )}
            <th scope="col">
              <Tooltip tooltipText="Link status active/inactive" position="top" textSize="md">
                Status
              </Tooltip>
            </th>
            <th scope="col">
              <Tooltip tooltipText="Date of link creation" position="top" textSize="md">
                Date
              </Tooltip>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            urls.map((link) => <TableRow key={link._id} {...link} />)
          }
          </tbody>
          <caption className={styles.srOnly}>User saved links</caption>
        </table>
      ) : (
        <div className={styles.emptyHistoryContainer}>
          <h2>Links history</h2>
          <p>Shorten your first link to see your links history!</p>
          <p>Or <a href="/auth/login">log in to your account</a> if you have used our service before!</p>
        </div>
      )}
    </div>
  );
};

