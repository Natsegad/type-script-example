import { Entity } from "./Entity";
import { IUserProps } from "../interfaces/User";

// This is test class
export class User extends Entity<IUserProps> {
  constructor({ id, ...data }: IUserProps) {
    super(data, id);
  }
}
