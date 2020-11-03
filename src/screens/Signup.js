import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { userSignUp } from '../actions/userActions'
import { defaultFormState } from '../defaultStates/defaultStates'

const Signup = ({ history, userHandlers }) => {
  const [form, setForm] = useState(defaultFormState)
  const [user, setUser] = userHandlers

  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    })
  }

  const handleSignup = async ev => {
    const data = await userSignUp(form)
    setForm(defaultFormState)
    if (data.success) {
      localStorage.removeItem('userState')
      history.push('/')
    } else {
      console.log(data)
      setUser(data)
    }
  }
  return (
    <Container>
      <Row className="my-5">
        <Col lg={5} sm={12}>
          <Form.Group>
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Button className="mx-3" variant="primary" onClick={handleSignup}>
          Signup
        </Button>
      </Row>
    </Container>
  )
}

export default Signup
