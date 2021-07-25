import { useDispatch } from 'react-redux'
import loginService from '../../services/login'
import tweetService from '../../services/tweets'
import { useAuth } from './ProvideAuth'
import { toast } from 'react-toastify'

export function useProvideAuth() {
  const { setAuth } = useAuth()
  const dispatch = useDispatch()

  const signin = (credential) => {
    return new Promise((resolve, reject) => {
      loginService
        .login(credential)
        .then((auth) => {
          window.localStorage.setItem(
            'loggedEngageAppUser',
            JSON.stringify(auth)
          )
          tweetService.setToken(auth.token)
          dispatch({ type: 'SET_USER', user: auth })
          toast.success(`${auth.username} logged in`.toUpperCase())
          setAuth(auth)
          resolve(auth)
        })
        .catch((error) => {
          reject(error)
          toast.error(`${error.response.data.error}`.toUpperCase())
        })
    })
  }

  const signout = () => {
    return new Promise(() => {
      window.localStorage.removeItem('loggedEngageAppUser')
      toast.success('Logged out successfully'.toUpperCase())
      dispatch({ type: 'SET_USER', user: null })
      setAuth(null)
    })
  }

  return {
    signin,
    signout,
  }
}
