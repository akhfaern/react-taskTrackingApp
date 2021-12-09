import axios from "./axios";

export class HttpService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getList() {
    return await axios.get(this.baseURL).then((res) => res.data);
  }

  async get(id) {
    return await axios.get(`${this.baseURL}/${id}`).then((res) => res.data);
  }

  add(data) {
    return axios.post(this.baseURL, data);
  }

  edit(id, data) {
    return axios.put(`${this.baseURL}/${id}`, data);
  }

  delete(id) {
    return axios.delete(`${this.baseURL}/${id}`);
  }
}
