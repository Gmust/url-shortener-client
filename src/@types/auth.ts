import { IUrl } from './url';
import { ISubscription } from './subscription';

interface ILoginReq {
  email: string,
  password: string
}

interface ILoginRes {
  user: IUser,
  access_token: string,
  refresh_token: string
}

interface IUser {
  email: string,
  name: string,
  surname: string,
  password: string,
  createdUrls: IUrl[],
  subscription: ISubscription,
  role: RolesEnum,
  supportChats: []
}

enum RolesEnum {
  USER = 'User',
  ADMIN = 'Admin',
  SUPPORT = 'Support'
}


export {
  ILoginRes,
  ILoginReq,
  RolesEnum,
  IUser,
};
