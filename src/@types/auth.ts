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


interface IRegisterReq {
  name: string,
  surname: string,
  password: string,
  email: string
}

interface IRegisterRes {
  message: string;
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


interface IConfirmAccountRes {
  message: string;
}

interface IConfirmAccountReq {
  email: string,
  confirmationToken: string
}

interface IRefreshTokenRes {
  access_token: string,
  refresh_token: string
}

interface IRefreshTokenReq {
  email: string,
  refresh_token: string
}


interface IForgotPasswordReq {
  email: string;
}

interface IForgotPasswordRes {
  message: string;
}

interface IResetPasswordReq {
  email: string,
  newPassword: string,
  resetToken: string
}

interface IResetPasswordRes {
  message: string;
}

enum RolesEnum {
  USER = 'User',
  ADMIN = 'Admin',
  SUPPORT = 'Support'
}


export {
  ILoginRes,
  ILoginReq,
  IRegisterRes,
  IRegisterReq,
  IConfirmAccountRes,
  IConfirmAccountReq,
  IRefreshTokenRes,
  IRefreshTokenReq,
  IForgotPasswordReq,
  IForgotPasswordRes,
  IResetPasswordRes,
  IResetPasswordReq,
  RolesEnum,
  IUser,
};
