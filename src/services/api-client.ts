import axios, { AxiosRequestConfig } from "axios";

export interface DataList<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<DataList<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    // id is a union to account for either id or slug
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
