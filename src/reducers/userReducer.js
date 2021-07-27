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

export const followUser = (userId) => {
  return async (dispatch) => {
    const updatedUser = await userService.followUser(userId)

    dispatch({ type: 'FOLLOW_USER', data: { updatedUser, userId } })
  }
}

export const unfollowUser = (userId) => {
  return async (dispatch) => {
    const updatedUser = await userService.unfollowUser(userId)

    dispatch({ type: 'UNFOLLOW_USER', data: { updatedUser, userId } })
  }
}

const userReducer = (state = [], action) => {
  console.log('state now', state)
  console.log('action', action)

  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'FOLLOW_USER': {
    const { updatedUser, userId } = action.data
    // Get the user making the follow request

    const [userFollowing] = state.filter((user) => user.id === updatedUser.id)

    userFollowing.following = [...userFollowing.following, userId]

    // Get the user to be followed
    const [userToBeFollowed] = state.filter((user) => user.id === userId)

    userToBeFollowed.followers = [
      ...userToBeFollowed.followers,
      updatedUser.id,
    ]

    // Get the rest of the user
    state = state.filter(
      (user) => user.id !== updatedUser.id && user.id !== userId
    )
    return [...state, userFollowing, userToBeFollowed]
  }

  case 'UNFOLLOW_USER': {
    const { updatedUser, userId } = action.data
    // Get the user making the follow request

    const [userFollowing] = state.filter((user) => user.id === updatedUser.id)

    userFollowing.following = userFollowing.following.filter(
      (id) => id !== userId
    )

    // Get the user to be unfollowed
    const [userToBeUnfollowed] = state.filter((user) => user.id === userId)

    userToBeUnfollowed.followers = userToBeUnfollowed.followers.filter(
      (id) => id !== updatedUser.id
    )

    // Get the rest of the user
    state = state.filter(
      (user) => user.id !== updatedUser.id && user.id !== userId
    )
    return [...state, userFollowing, userToBeUnfollowed]
  }

  default:
    return state
  }
}

export default userReducer
