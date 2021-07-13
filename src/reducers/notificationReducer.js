export const setNotification = (messageInfo, ts) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
      messageInfo,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_MESSAGE',
        messageInfo: null,
      })
    }, ts * 1000)
  }
}

const notificationReducer = (state = null, action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.messageInfo
    default:
      return state
  }
}

export default notificationReducer
