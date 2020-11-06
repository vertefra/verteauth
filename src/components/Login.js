import React, { useState } from 'react'
import { Form, FormControl, Button, Navbar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userLogin } from '../actions/userActions'
import { defaultFormState } from '../defaultStates/defaultStates'

const Login = ({ userHandlers }) => {
  const [user, setUser] = userHandlers
  const [form, setForm] = useState(defaultFormState)

  const handleFormChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    })
  }

  const handleLogin = async ev => {
    console.log('login')
    ev.preventDefault()

    const userState = await userLogin(form)
    if (userState.success) {
      setUser(userState)
      setForm(defaultFormState)
    } else {
      // the object received will give an error property to the user Object
      setUser(userState)
      setForm(defaultFormState)
    }
  }

  return (
    <Form inline>
      <FormControl
        type="email"
        placeholder="email"
        className="mr-sm-2"
        id="email"
        value={form.email}
        onChange={handleFormChange}
      />
      <FormControl
        type="text"
        placeholder="password"
        className="mr-sm-2"
        id="password"
        value={form.password}
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
