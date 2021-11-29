import axios from "axios";

const request: {
  get: Function;
  post: Function;
  put: Function;
  delete: Function;
} = {
  get: async (url: string): Promise<void> => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (
    url: string,
    redata: any,
    headers?: { headers: {} }
  ): Promise<void> => {
    const { data } = await axios.post(url, redata, headers);
    return data;
  },

  put: async (
    url: string,
    data: any,
    headers?: { headers: {} }
  ): Promise<void> => await axios.put(url, data, headers),

  delete: async (url: string, headers?: { headers: {} }): Promise<void> =>
    await axios.delete(url, headers),
};

export { request };
