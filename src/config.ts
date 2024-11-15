import { config } from 'dotenv'

config({
  path: '.env',
})

export const PORT = process.env.PORT || 3000

export const DATABASE_URL = process.env.DATABASE_URL || ''
