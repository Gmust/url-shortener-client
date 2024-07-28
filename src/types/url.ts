interface IUrl {
  urlId: string,
  _id: string,
  originalUrl: string,
  shortUrl: string,
  clicks: number,
  expiresIn?: string,
  maxClicks?: number,
  isActive: boolean,
  updatedAt: string,
  createdAt: string
}


interface IShortenUrlReq {
  originalUrl: string;
}

interface IShortenUrlRes {
  url: IUrl,
  message: string
}

interface IShortenCustomUrlReq {
  originalUrl: string,
  customName: string,
  maxClicks: number,
  expiresIn: string,
  isActive: boolean,
  saveLink: boolean,
  userId: string
}

interface IChangeUrlStatusReq {
  urlId: string;
}

interface IEditCustomUrlReq {
  urlId: string,
  newOriginalUrl?: string,
  newUrlId?: string,
  newMaxClicks?: number,
  newExpiresIn?: string
}


export {
  IUrl,
  IShortenUrlReq,
  IShortenUrlRes,
  IShortenCustomUrlReq,
  IChangeUrlStatusReq,
  IEditCustomUrlReq,
};
