export const log = (params: any) => console.log(params);

export const getPreUrl = (url: string) => {
  const dotIndex = url.lastIndexOf(".");
  return url?.substring(0, dotIndex) + "-pre" + url?.substring(dotIndex);
};
