import React, { useState, createContext, useContext } from 'react'
import { useDispatch } from 'react-redux'
import tweetService from '../../services/tweets'

const authContext = createContext()

export function ProvideAuth({ children }) {
  const dispatch = useDispatch()
  const [auth, setAuth] = useState(() => {
    const loggedUser = window.localStorage.getItem('loggedEngageAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch({ type: 'SET_USER', user })
      tweetService.setToken(user.token)
      return user
    }
    return null
  })

  console.log('Provide auth', auth)

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}
