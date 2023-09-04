import { injectable, inject } from "inversify";
import { User } from "../domain/User";
import { IUserRepository } from "../interfaces/User";

// This is test
export class UserRepository implements IUserRepository {
  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      return reject(user);
    });
  }
}
