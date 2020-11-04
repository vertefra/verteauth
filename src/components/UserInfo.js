import React from 'react'
import { Jumbotron, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserInfo = ({ user }) => {
  return (
    <Jumbotron>
      <Alert variant="warning">
        Account ID: {user.userId} <br></br>Account Key: {user.key}
      </Alert>
      <Alert variant="warning">Account email: {user.email}</Alert>
      <p>
        Account Id will be used in the requests to retrieve the secret key
        associated with your account. For more info on how set up a request see{' '}
        <Link to="/doc">documentation</Link>
      </p>
    </Jumbotron>
  )
}

export default UserInfo
