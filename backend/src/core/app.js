import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import routes from '../routes/index.js'

const app = express()

/**
 * SECURITY MIDDLEWARE
 */
app.use(helmet())

/**
 * CORS CONFIGURATION
 */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
)

/**
 * BODY PARSING
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

/**
 * REQUEST LOGGER
 */
app.use(morgan('dev'))

/**
 * API ROUTES
 */
app.use('/api', routes)

/**
 * HEALTH CHECK
 */
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'St. Gebriel Church API Running'
  })
})

export default app