import userService from '../services/users'

export const initUser = (id) => {
  return async (dispatch) => {
    const data = await userService.getSingleUser(id)
    dispatch({ type: 'INIT_USER', data })
  }
}

const currentUserReducer = (state = {}, action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
  case 'INIT_USER':
    return action.data
  default:
    return state
  }
}

export default currentUserReducer
