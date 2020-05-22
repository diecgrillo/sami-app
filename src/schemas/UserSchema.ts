import { Schema, model } from 'mongoose'
import HealthInsurance from './HealthInsuranceSchema'

interface User extends Document{
  name?: string
  cpf?: string
  rg?: string
  birthDate?: Date
  healthInsurance?: HealthInsurance
}

const UserSchema = new Schema({
  name: String,
  cpf: String,
  rg: String,
  birthDate: Date,
  healthInsurance: HealthInsurance.schema
},
{
  timestamps: true
})

export default model<User>('User', UserSchema)
