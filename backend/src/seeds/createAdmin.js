import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import Admin from '../models/Admin.js'

await mongoose.connect(process.env.MONGO_URI)

const adminExists = await Admin.findOne({
  email: 'admin@stgebriel.com'
})

if (adminExists) {
  console.log('Admin already exists')
  process.exit()
}

await Admin.create({
  name: 'Main Admin',
  email: 'admin@stgebriel.com',
  password: '123456',
  role: 'admin'
})

console.log('✅ Admin created')

process.exit()