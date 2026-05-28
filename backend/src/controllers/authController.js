import Admin from '../models/Admin.js'
import { generateToken } from '../utils/jwt.js'

/**
 * LOGIN ADMIN
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    /**
     * CHECK USER
     */
    const admin = await Admin.findOne({ email })

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    /**
     * CHECK PASSWORD
     */
    const isMatch = await admin.comparePassword(password)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    /**
     * GENERATE JWT
     */
    const token = generateToken({
      id: admin._id,
      role: admin.role
    })

    /**
     * STORE TOKEN IN COOKIE
     */
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    /**
     * RESPONSE
     */
    res.json({
      success: true,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}