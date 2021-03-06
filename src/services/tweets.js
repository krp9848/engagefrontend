import axios from 'axios'
const baseUrl = '/api/tweets'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)

  return response.data
}

const tweetDelete = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

// like tweet

const tweetLike = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/${id}/like`, {}, config)

  return response.data
}

// tweet retweet
const tweetRetweet = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/${id}/retweet`, {}, config)

  return response.data
}

const tweetService = {
  getAll,
  setToken,
  create,
  tweetDelete,
  tweetLike,
  tweetRetweet,
}
export default tweetService
