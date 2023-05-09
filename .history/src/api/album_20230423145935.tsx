import request from "./axios";

export async function queryByPage(params: any) {
  const res: any = await request({
    url: `/api/album/queryByPage`,
    method: "GET",
    params,
  });
  if (res?.code === 1) {
    return Promise.resolve(res?.data || []);
  }
}

export async function uploads(params: any) {
  const res: any = await request({
    url: `/file/uploads`,
    method: "post",
    data: params,
  });
  if (res.code === 1) {
    return Promise.resolve(res?.data || []);
  }
}
