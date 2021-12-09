import { HttpService } from "./HttpService";

export class UserService extends HttpService {
  constructor() {
    super("/users");
  }
}
