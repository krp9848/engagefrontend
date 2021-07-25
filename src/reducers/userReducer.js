import { toast } from 'react-toastify'
import userService from '../services/users'

export const initUsers = () => {
  return async (dispatch) => {
    const data = await userService.getAll()
    console.log('Requesting all users')
    dispatch({ type: 'INIT_USERS', data })
  }
}

export const createUser = (newUser) => {
  return new Promise((resolve, reject) => {
    userService
      .create(newUser)
      .then((newUser) => {
        resolve(newUser)
      })
      .catch((error) => {
        reject(error.response.data.error)
        toast.error(error.response.data.error)
      })
  })
}

const userReducer = (state = [], action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  default:
    return state
  }
}

export default userReducer
