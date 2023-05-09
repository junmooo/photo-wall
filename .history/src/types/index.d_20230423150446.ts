import { NoticeType } from "antd/es/message/interface";
import Waterfall from "waterfall-react";

export interface AxiosStatic extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
  create(config?: CreateAxiosDefaults): AxiosInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  Axios: typeof Axios;
  AxiosError: typeof AxiosError;
  HttpStatusCode: typeof HttpStatusCode;
  readonly VERSION: string;
  isCancel: typeof isCancel;
  all: typeof all;
  spread: typeof spread;
  isAxiosError: typeof isAxiosError;
  toFormData: typeof toFormData;
  formToJSON: typeof formToJSON;
  CanceledError: typeof CanceledError;
  AxiosHeaders: typeof AxiosHeaders;
}

declare const axios: AxiosStatic;

declare module "macy" {
  const Macy: any;
  export = Macy;
}

type Album = {
  id?: string;
  albumName?: string;
  photoIds?: string;
  albumTitle?: string;
  albumSubTitle?: string;
  albumDesc?: string;
  remark?: string;
  uploaderId?: string;
  timeCreated?: number;
  photos?: Photo[];
};

type Photo = {
  id?: string;
  name?: string;
  url?: string;
  originalName?: string;
  width?: string;
  height?: string;
  deleteFlag?: string;
  album?: string;
  remark?: string;
  uploaderId?: string;
  sortOrder?: number;
  timeCreated?: number;
  hideFlag?: string;
};
type AlbumVO = {
  album: Album;
  photos: Photo[];
};
interface QueyAlbumParam extends Album {
  keyword?: string;
  start?: number;
  end?: number;
  pgNum: number;
  pgSize: number;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

declare module "macy";

declare module "waterfall-react";
declare module "lodash";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg";
