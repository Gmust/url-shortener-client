import { useState } from 'react';
import { TableRow } from '@components/mainPage/urlsList/TableRow';
import { IUrl } from '../../../@types/url';
import styles from '@styles/urlsTable/urls-table.module.scss';

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
    shortUrl: 'https://short.ly/2',
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
    shortUrl: 'https://short.ly/3',
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

  const [links, setLinks] = useState<IUrl[]>(mockUrls);

  return (
    <div>
      <table>
        <caption>User saved links</caption>
        <thead>
        <tr>
          <th scope="col">Short link</th>
          <th scope="col">Original link</th>
          <th scope="col">Clicks</th>
          {links.some((link) => link.maxClicks) &&
            <th scope="col">Max. Clicks</th>
          }
          <th scope="col">Status</th>
          <th scope="col">Date</th>
        </tr>
        </thead>
        <tbody>
        {
          links.length > 0 ? links.map(link => <TableRow key={link._id} {...link} />)
            : <p>It's kind of empty here</p>
        }
        </tbody>
        <tfoot>
        <tr>
          <th scope="row" colSpan={2}></th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

