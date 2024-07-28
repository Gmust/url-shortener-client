import { IUrl } from '../types/url';
import { persistentAtom } from '@nanostores/persistent';


export const $urls = persistentAtom<IUrl[]>(
  'urls',
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);


export function setUrls(data: IUrl[]) {
  const currentUrls = $urls.get();
  const newUrls = [...currentUrls, ...data];
  $urls.set(newUrls);
}

export function addUrl(url: IUrl) {
  const currentUrls = $urls.get();
  const newUrls = [...currentUrls, url];
  $urls.set(newUrls);
}

export function removeUrl(urlId: string) {
  const currentUrls = $urls.get();
  const newUrls = currentUrls.filter(url => url._id !== urlId);
  $urls.set(newUrls);
}
