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

export {
  IUrl,
};
