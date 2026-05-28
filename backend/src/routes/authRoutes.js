import express from 'express'
import { login } from '../controllers/authController.js'

const router = express.Router()

/**
 * LOGIN ROUTE
 */
router.post('/login', login)

export default router