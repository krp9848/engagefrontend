import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
  const messageInfo = useSelector((state) => state.notification)
  const notify = () => {
    if (messageInfo.messageType === 'success') {
      toast.success(messageInfo.message.toUpperCase())
    } else {
      toast.error(messageInfo.message.toUpperCase())
    }
  }

  if (!messageInfo) return null

  notify()

  return <ToastContainer />
}

export default Notification
