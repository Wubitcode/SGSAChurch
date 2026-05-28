import dotenv from 'dotenv'
dotenv.config()

import app from './core/app.js'
import connectDB from './config/db.js'

const PORT = process.env.PORT || 5000

/**
 * CONNECT DATABASE
 */
connectDB()

/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})