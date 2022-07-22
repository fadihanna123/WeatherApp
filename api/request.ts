import axios from "axios";

export const request = {
  get: async (url: string): Promise<void> => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (
    url: string,
    redata: any,
    headers?: { headers: Record<string, string> }
  ): Promise<void> => {
    const { data } = await axios.post(url, redata, headers);
    return data;
  },

  put: async (
    url: string,
    data: any,
    headers?: { headers: Record<string, string> }
  ): Promise<void> => await axios.put(url, data, headers),

  delete: async (url: string, headers?: { headers: Record<string, string> }): Promise<void> =>
    await axios.delete(url, headers),
};