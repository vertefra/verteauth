import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { createNewAccount, loadAccounts } from '../actions/accountsActions'
import { defaultFormAccountState } from '../defaultStates/defaultStates'

const AddAuthorization = ({ userHandlers, projectHandlers }) => {
  const [form, setForm] = useState(defaultFormAccountState)
  const [user, setUser] = userHandlers
  const [projects, setProjects] = projectHandlers

  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    })
  }

  const handleCreateNewAuth = async ev => {
    ev.preventDefault()
    const data = await createNewAccount(form)
    if (!data.success) {
      setUser({
        ...user,
        error: data.error,
      })
    } else {
      const data = await loadAccounts()
      if (data.success) {
        setProjects(data.accounts)
        setForm(defaultFormAccountState)
      } else {
        setUser(data)
        setForm(defaultFormAccountState)
      }
    }
  }

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
            <Form.Group>
              <Form.Label>Username access (must be email formatted)</Form.Label>
              <Form.Control
                type="username"
                value={form.username}
                id="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={form.password}
                id="password"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          <Button onClick={handleCreateNewAuth}>Create</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AddAuthorization
