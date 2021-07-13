import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const messageInfo = useSelector((state) => state.notification)

  if (!messageInfo) return null

  return (
    <h2
      className={[
        'info',
        messageInfo.messageType === 'success' ? 'success' : 'failure',
      ].join(' ')}
    >
      {messageInfo.message}
    </h2>
  )
}

export default Notification
