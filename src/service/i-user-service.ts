import User from '../schemas/UserSchema'

export interface IUserService {
  getUsers(): Promise<User[]>;
  updateUser(id: number, user: User): Promise<any>
  createUser(user: User): Promise<User>
  deleteUser(id: number): Promise<any>
}
