import { REQUEST_USERS, RECEIVE_USERS, RECEIVE_USERS_ERROR } from '../actions/users'

const defaultState = {
  users: [],
  error: null,
  ready: false
}

export default function (state = defaultState, { type, users, error }) {
  switch (type) {
    case REQUEST_USERS:
      return {
        error: null,
        ready: false
      }
    case RECEIVE_USERS:
      return {
        error: null,
        ready: true,
        users
      }
    case RECEIVE_USERS_ERROR:
      return {
        error,
        ready: false
      }
    default:
      return state
  }
}
