import axios, { AxiosResponse } from "axios";

export const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

class ApiService {
  public headers: { [name: string]: string };

  constructor() {
    this.headers = { ...DEFAULT_HEADERS };
  }

  public get(url, params?): Promise<any> {
    return axios
      .get(url, {
        params,
        headers: this.headers
      })
      .then(this.response);
  }

  private response({ data }: AxiosResponse) {
    return data;
  }
}

const apiService = new ApiService();

export default apiService;
