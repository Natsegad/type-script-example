import { User } from "../domain/User";

// This is test interfaces
export interface IUserProps {
  id?: string;
  name: string;
  age: number;
}

export interface IUserRepository {
  create(user: User): Promise<User>;
}
