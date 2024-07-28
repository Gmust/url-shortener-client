import {
  IChangeUrlStatusReq,
  IEditCustomUrlReq,
  IShortenCustomUrlReq,
  IShortenUrlReq,
  IShortenUrlRes,
} from '../types/url';
import { $authHost, $unAuthHost } from './index';

export class UrlsService {

  public static async shortenUrl({ originalUrl }: IShortenUrlReq) {
    try {
      const response = await $unAuthHost.post<IShortenUrlRes>('/urls/shorten', {
        originalUrl,
      });

      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public static async shortenCustomUrl(data: IShortenCustomUrlReq) {
    try {
      const response = await $authHost.post<IShortenUrlRes>('/urls/shorten-custom',
        data,
      );

      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public static async changeUrlStatus({ urlId }: IChangeUrlStatusReq) {
    try {
      const response = await $unAuthHost.patch<IShortenUrlRes>(`/urls/${urlId}/change-status`);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public static async editCustomUrl(data: IEditCustomUrlReq) {
    try {
      const response = await $authHost.patch<IShortenUrlRes>('/urls/edit-custom-url', data);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}


