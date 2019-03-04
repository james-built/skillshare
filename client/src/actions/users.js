import request from 'superagent'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USERS_ERROR = 'RECEIVE_USERS_ERROR'

export const requestUsers = () => ({
  type: REQUEST_USERS
})

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const handleError = error => ({
  type: RECEIVE_USERS_ERROR,
  error
})

export function fetchUsers () {
  return (dispatch) => {
    dispatch(requestUsers())
    return request
      .get('/api/v1/users/get-sample-users')
      .then(res => dispatch(receiveUsers(res.data.users)))
      .catch(err => dispatch(handleError(err.message)))
  }
}
