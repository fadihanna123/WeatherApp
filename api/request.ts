import axios, { AxiosResponse } from "axios";

const request = async (
  url: string,
  method?: any,
  sent?: any,
  headers?: {}
): Promise<any> => {
  let data: AxiosResponse<any> | undefined;

  if (method === "get") {
    data = await axios.get(url, headers);
  } else if (method === "post") {
    data = await axios.post(url, sent, headers);
  } else if (method === "put") {
    data = await axios.put(url, sent, headers);
  } else if (method === "delete") {
    data = await axios.delete(url, headers);
  } else {
    data = await axios.get(url);
  }

  return data!.data;
};

export { request };
