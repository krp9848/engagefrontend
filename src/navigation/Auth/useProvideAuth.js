import { useDispatch } from 'react-redux'
import loginService from '../../services/login'
import tweetService from '../../services/tweets'
import { useAuth } from './ProvideAuth'

export function useProvideAuth() {
  const { setAuth } = useAuth()
  const dispatch = useDispatch()

  const signin = async (credential) => {
    const auth = await loginService.login(credential)
    window.localStorage.setItem('loggedEngageAppUser', JSON.stringify(auth))
    tweetService.setToken(auth.token)
    dispatch({ type: 'SET_USER', user: auth })
    setAuth(auth)
  }

  const signout = async () => {
    window.localStorage.removeItem('loggedEngageAppUser')
    dispatch({ type: 'SET_USER', user: null })
    setAuth(null)
  }

  return {
    signin,
    signout,
  }
}
