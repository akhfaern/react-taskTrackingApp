import axios from "./axios";
import { HttpService } from "./HttpService";

export class TodoService extends HttpService {
  constructor() {
    super("/todos");
  }

  async getTodoByUser(userId) {
    return await axios
      .get(`${this.baseURL}?userId=${userId}`)
      .then((res) => res.data);
  }
}
