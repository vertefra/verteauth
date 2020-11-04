import React from 'react'
import { Jumbotron, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserInfo = ({ user }) => {
  console.log(user)
  return (
    <Jumbotron>
      <Alert variant="warning">Account ID: {user.userId}</Alert>
      <Alert variant="warning">Account email: {user.email}</Alert>
      <p>
        Account Id will be used in the requests to retrieve the secret key
        associated with your account. For more info on how set up a request see{' '}
        <Link>documentation</Link>
      </p>
    </Jumbotron>
  )
}

export default UserInfo
