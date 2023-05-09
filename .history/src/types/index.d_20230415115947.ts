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
declare module "macy";

declare module "waterfall-react";
declare module "lodash";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg";
