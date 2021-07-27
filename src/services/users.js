import axios from 'axios'
const baseUrl = '/api/users'

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

const userService = { getAll, create, getUserTweets, getSingleUser }
export default userService
