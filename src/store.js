import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import currentUserReducer from './reducers/currentUserReducer'
import loginReducer from './reducers/loginReducer'
import tweetReducer from './reducers/tweetReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  users: userReducer,
  currentUser: currentUserReducer,
  tweets: tweetReducer,
  loggedInUser: loginReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
