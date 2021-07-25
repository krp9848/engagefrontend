import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Notification from '../components/Notification/Notification'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import Home from '../pages/Home'
import Profile from '../pages/Profile/'
import LoginForm from './Auth/LoginForm/LoginForm'
import PrivateRoute from './Auth/PrivateRoute'
import { ROOT, SIGNUP, LOGIN, HOME, PROFILE } from './CONSTANT'
import NotFound from './NotFound'

const RouterConfig = () => {
  return (
    <>
      <Notification />
      <Switch>
        {/* Public routes */}
        <Route exact path={LOGIN} component={LoginForm} />
        <Route exact path={SIGNUP} component={SignUpForm} />

        {/* Private routes */}
        <PrivateRoute exact path={ROOT}>
          <Home />
        </PrivateRoute>

        <PrivateRoute exact path={HOME}>
          <Home />
        </PrivateRoute>

        <PrivateRoute exact path={`${PROFILE}/:username`}>
          <Profile />
        </PrivateRoute>

        {/* PAGE NOT FOUND */}
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}

export default RouterConfig
