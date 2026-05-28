import React, { createContext, useContext, useState, useEffect } from 'react'
import axiosClient from '../api/axiosClient'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('church_user')

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const response = await axiosClient.post('/auth/login', {
        email,
        password
      })

      // FIX: backend usually returns data inside response.data
      const userData = response?.data?.user || {
        email,
        role: 'admin'
      }

      localStorage.setItem('church_user', JSON.stringify(userData))
      setUser(userData)

      return { success: true, user: userData }
    } catch (error) {
      return {
        success: false,
        message: error?.response?.data?.message || 'Login failed'
      }
    }
  }

  const logout = async () => {
    try {
      await axiosClient.post('/auth/logout')
    } catch (err) {
      console.log('Logout backend error ignored')
    } finally {
      localStorage.removeItem('church_user')
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)