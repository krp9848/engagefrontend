import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getSingleUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getUserTweets = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

// follow a particular user
const followUser = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`${baseUrl}/${id}/follow`, {}, config)

  return response.data
}

// unfollow a particular user
const unfollowUser = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`${baseUrl}/${id}/unfollow`, {}, config)

  return response.data
}

const userService = {
  getAll,
  create,
  getUserTweets,
  getSingleUser,
  followUser,
  setToken,
  unfollowUser,
}
export default userService
