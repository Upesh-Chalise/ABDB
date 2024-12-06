import { GetAllUsers } from "./user/get-all-user.controller";
import { CreateUser } from "./user/user-create.controller";

const methods = {
  create: CreateUser,
  getAll: GetAllUsers,
};

export default methods;
