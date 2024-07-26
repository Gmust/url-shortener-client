import { atom } from 'nanostores';
import { IUrl } from '../types/url';


export const $urls = atom<IUrl[]>([]);
//TODO add persistence  for stores and for logged in users urls, and for logged out

export function setUrls(data: IUrl[]) {
  $urls.set([...$urls.get(), ...data]);
}

export function addUrl(url: IUrl) {
  $urls.set([...$urls.get(), url]);
}

export function removeUrl(urlId: string) {
  $urls.set([...$urls.get().filter(url => url._id !== urlId)]);
}
