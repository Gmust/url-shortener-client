import { useState } from 'react';
import { TableRow } from '@components/mainPage/urlsList/TableRow';
import { IUrl } from '../../../@types/url';
import styles from '@styles/urlsTable/urls-table.module.scss';
import { Tooltip } from '@components/shared/Tooltip';


const mockUrls: IUrl[] = [
  {
    urlId: '123abc',
    originalUrl: 'https://example.com/long-url-1',
    shortUrl: 'https://short.ly/1',
    clicks: 10,
    expiresIn: '2024-12-31T23:59:59Z',
    maxClicks: 100,
    isActive: true,
    _id: '123abc',
    createdAt: '2024-07-11T21:13:42.802Z',
    updatedAt: '2024-07-11T21:13:42.802Z',
  },
  {
    urlId: '456def',
    originalUrl: 'https://example.com/long-url-2',
    shortUrl: 'https://short.ly/long-url-3',
    clicks: 5,
    expiresIn: '2024-11-30T23:59:59Z',
    maxClicks: 50,
    isActive: true,
    _id: '123abcr',
    createdAt: '2024-07-11T21:13:42.802Z',
    updatedAt: '2024-07-11T21:13:42.802Z',
  },
  {
    urlId: '789ghi',
    originalUrl: 'https://example.com/long-url-3',
    shortUrl: 'https://short.ly/long-url-3',
    clicks: 0,
    expiresIn: '2024-10-31T23:59:59Z',
    maxClicks: 0,
    isActive: true,
    _id: '123abcds',
    createdAt: '2024-07-11T21:13:42.802Z',
    updatedAt: '2024-07-11T21:13:42.802Z',
  },
  {
    urlId: '012jkl',
    originalUrl: 'https://example.com/long-url-4',
    shortUrl: 'https://short.ly/4',
    clicks: 20,
    expiresIn: '2024-09-30T23:59:59Z',
    maxClicks: 200,
    isActive: false,
    _id: '123abcdas',
    createdAt: '2024-07-11T21:13:42.802Z',
    updatedAt: '2024-07-11T21:13:42.802Z',
  },
  {
    urlId: '345mno',
    originalUrl: 'https://example.com/long-url-5',
    shortUrl: 'https://short.ly/5',
    clicks: 0,
    expiresIn: '2024-08-31T23:59:59Z',
    maxClicks: 300,
    isActive: true,
    _id: '123abc123',
    createdAt: '2024-07-11T21:13:42.802Z',
    updatedAt: '2024-07-11T21:13:42.802Z',
  },
];


export const UrlsTable = () => {
  const isAuth = false;
  const [links, setLinks] = useState<IUrl[]>(isAuth ? null : mockUrls);

  return (
    <div className={styles.tableContainer}>
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
          <th scope="col">
            <Tooltip tooltipText="Original link for current shortened link" position="top" textSize="md">
              Clicks
            </Tooltip>
          </th>
          {links.some((link) => link.maxClicks) && (
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
        {links.length > 0 ? (
          links.map((link) => <TableRow key={link._id} {...link} />)
        ) : (
          <p>It's kind of empty here</p>
        )}
        </tbody>
        <caption className={styles.srOnly}>User saved links</caption>
      </table>
    </div>
  );
};

