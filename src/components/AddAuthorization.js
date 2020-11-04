import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { defaultFormAccountState } from '../defaultStates/defaultStates'

const AddAuthorization = () => {
  const [form, setForm] = useState(defaultFormAccountState)

  const handleChange = ev => {}

  return (
    <Container className="container">
      <Row>
        <Col className="text-center">
          <h5>Add an autorization</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username access (must be email formatted)</Form.Label>
              <Form.Control
                type="username"
                value={form.username}
                id="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button>Create</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddAuthorization
