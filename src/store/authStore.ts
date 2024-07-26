import { atom } from 'nanostores';
import { IUser } from '../types/auth';


export const $user = atom<IUser | null>(null);
export const $isAuth = atom(!!$user);


export function setUser(data: IUser) {
  $user.set(data);
}

export function setIsAuth(data: boolean) {
  $isAuth.set(data);
}
