import React, { useState } from 'react'
import { Form, FormControl, Button, Navbar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userLogin } from '../actions/userActions'

const Login = ({ userHandlers }) => {
  const [user, setUser] = userHandlers
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const handleFormChange = ev => {
    setLoginForm({
      ...loginForm,
      [ev.target.id]: ev.target.value,
    })
  }

  const handleLogin = async ev => {
    console.log('login')
    ev.preventDefault()
    const userState = await userLogin(loginForm)
    if (userState.success) {
      userState.auth = true
      console.log(userState)
      setUser(userState)
    } else {
      console.log(userState)
    }
  }

  return (
    <Form inline>
      <FormControl
        type="email"
        placeholder="email"
        className="mr-sm-2"
        id="email"
        value={loginForm.email}
        onChange={handleFormChange}
      />
      <FormControl
        type="text"
        placeholder="password"
        className="mr-sm-2"
        id="password"
        value={loginForm.password}
        onChange={handleFormChange}
      />
      <Button
        type="button"
        variant="primary"
        className="mr-sm-2"
        onClick={handleLogin}
      >
        login
      </Button>
      <Row>
        <Col>
          <h6 style={{ textAlign: 'right' }}>You don't have an account?</h6>
        </Col>
        <Col>
          <Link to="/signup">
            <Button>signup</Button>
          </Link>
        </Col>
      </Row>
    </Form>
  )
}

export default Login
