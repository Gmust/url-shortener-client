import { IUrl } from '../../../@types/url';


export const TableRow = (url: IUrl) => {
  return (
    <tr>
      <th scope="row">{url.shortUrl}</th>
      <td>{url.originalUrl}</td>
      <td>{url.clicks}</td>
      <td>{url.maxClicks ? url.maxClicks : '---'}</td>
      <td>{url.isActive ? 'true' : 'false'}</td>
      <td>{url.createdAt}</td>
    </tr>
  );
};

