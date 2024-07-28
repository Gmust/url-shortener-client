import { atom } from 'nanostores';
import { IUser } from '../types/auth';


export const $user = atom<IUser | null>(null);
export const $isAuth = atom<boolean>(false);


export function setUser(data: IUser) {
  $user.set(data);
}

export function removeUser() {
  $user.set(null);
}

export function setIsAuth(data: boolean) {
  $isAuth.set(data);
}
