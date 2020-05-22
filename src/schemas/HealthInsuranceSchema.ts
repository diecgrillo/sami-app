import { Schema, model } from 'mongoose'

interface HealthInsurance extends Document{
  type?: string
  dependentsNumber?: number
}

const HealthInsuranceSchema = new Schema({
  type: {
    type: String,
    enum: ['Basic', 'Standard', 'Premium'],
    default: 'Basic'
  },
  dependentsNumber: Number
},
{
  timestamps: true
})

export default model<HealthInsurance>('HealthInsurance', HealthInsuranceSchema)
