import {
  IConfirmAccountReq,
  IConfirmAccountRes, IForgotPasswordReq, IForgotPasswordRes,
  ILoginReq,
  ILoginRes,
  IRefreshTokenReq, IRefreshTokenRes,
  IRegisterReq, IResetPasswordReq, IResetPasswordRes,
} from '../@types/auth';
import { $unAuthHost } from './index';

export class AuthService {

  public static async login({ password, email }: ILoginReq) {
    try {
      const response = await $unAuthHost.post<ILoginRes>(
        '/auth/sign-in',
        {
          email,
          password,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async registerAccount({ email, password, surname, name }: IRegisterReq) {
    try {
      const response = await $unAuthHost.post(
        '/auth/sign-up',
        {
          email,
          password,
          name,
          surname,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async confirmAccountRegistration({ confirmationToken, email }: IConfirmAccountReq) {
    try {
      const response = await $unAuthHost.post<IConfirmAccountRes>(
        '/auth/confirm-registration',
        {
          confirmationToken,
          email,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async refreshToken({ refresh_token, email }: IRefreshTokenReq) {
    try {
      const response = await $unAuthHost.post<IRefreshTokenRes>(
        '/auth/refresh-token',
        {
          refresh_token,
          email,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async forgotPassword({ email }: IForgotPasswordReq) {
    try {
      const response = await $unAuthHost.post<IForgotPasswordRes>(
        '/auth/forgot-password',
        {
          email,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async resetPassword({ email, resetToken, newPassword }: IResetPasswordReq) {
    try {
      const response = await $unAuthHost.post<IResetPasswordRes>(
        '/auth/reset-password',
        {
          email,
          resetToken,
          newPassword,
        },
      );

      return response.data;
    } catch (e) {
      throw e;
    }
  }

}
