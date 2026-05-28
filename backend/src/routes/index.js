import express from 'express'
import authRoutes from './authRoutes.js'

const router = express.Router()

/**
 * HEALTH ROUTE
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API healthy'
  })
})

/**
 * AUTH ROUTES
 */
router.use('/auth', authRoutes)

export default router