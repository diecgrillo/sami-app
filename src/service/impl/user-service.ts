import IUserService from '../i-user-service'
import User from '../../schemas/UserSchema'
import HealthInsurance from '../../schemas/HealthInsuranceSchema'

export class UserService implements IUserService {
  public async getUsers(): Promise<User[]> {
    return User.find()
  }
  public async updateUser(id: number, user: User): Promise<any> {
    return User.update({_id: id}, user)
  }
  public async createUser(user: User): Promise<User> {
    const healthInsurance = new HealthInsurance(user.healthInsurance)
    console.log(user.healthInsurance)
    const new_user = new User(user)
    new_user.healthInsurance = healthInsurance
    return new_user.save()
  }
  public async deleteUser(id: number): Promise<any> {
    return User.deleteOne({_id: id})
  }
}
