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
  if (currentUrls.filter(arrUrl => arrUrl._id === url._id).length > 0) return;
  const newUrls = [...currentUrls, url];
  $urls.set(newUrls);
}

export function updateUrl(updatedUrl: IUrl) {
  const currentUrls = $urls.get();
  const updatedUrls = currentUrls.map(url =>
    url._id === updatedUrl._id ? { ...url, isActive: updatedUrl.isActive } : url,
  );
  $urls.set(updatedUrls);
}

export function removeUrl(urlId: string) {
  const currentUrls = $urls.get();
  const newUrls = currentUrls.filter(url => url._id !== urlId);
  $urls.set(newUrls);
}

export function removeUrls() {
  $urls.set([]);
}
