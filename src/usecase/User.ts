import { UserRepository } from "../repository/User";
import { User } from "../domain/User";
import { IUserProps } from "../interfaces/User";

export class UserUseCase {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  create(): Promise<User> | undefined {
    let user: IUserProps = {
      id: "asd",
      name: "asd",
      age: 1,
    };

    return this._userRepository?.create(new User(user));
  }
}
