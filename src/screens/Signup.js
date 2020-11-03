import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { userSignUp } from '../actions/userActions'

const Signup = ({ history }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    })
  }

  const handleSignUp = async ev => {
    console.log(ev)
    const data = await userSignUp(form)
    setForm({ email: '', password: '' })
    if (data.success) {
      localStorage.setItem('userState', '')
      history.push('/')
    } else {
      console.log(data)
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
        <Button className="mx-3" variant="primary" onClick={handleSignUp}>
          Signup
        </Button>
      </Row>
    </Container>
  )
}

export default Signup
