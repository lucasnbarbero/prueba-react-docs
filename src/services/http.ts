import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  private _instance: AxiosInstance;

  constructor(uri: string) {
    this._instance = axios.create({
      baseURL: uri,
      timeout: 5000,
    });
  }

  public get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._instance.get(url, config);
  }
}

export default HttpService;
