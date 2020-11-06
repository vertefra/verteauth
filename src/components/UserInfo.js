import { useState, useEffect } from 'react'
import { Jumbotron, Alert, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { updateUser } from '../actions/userActions'

const UserInfo = ({ userHandlers }) => {
  const [user, setUser] = userHandlers
  const [form, setForm] = useState({
    readOnly: true,
    url: user.redirectURL,
  })

  console.log('USER', user)

  const handleUpdateUrl = () => {
    if (!form.readOnly) {
      user.redirectURL = form.url
      ;(async () => {
        const data = await updateUser(user)
        if (data.success) {
          setUser({
            ...user,
            ...data,
          })
        } else {
          setUser({
            ...user,
            error: data.error,
          })
        }
      })()
    }

    // toggle readonly and button value
    setForm({
      ...form,
      readOnly: form.readOnly ? false : true,
    })
  }

  const handleChange = ev => {
    setForm({
      ...form,
      [ev.target.id]: ev.target.value,
    })
  }

  return (
    <Jumbotron>
      <Alert variant="warning">
        Account ID: {user.ID} <br></br>Account Key: {user.key}
      </Alert>
      <Alert variant="warning">Account email: {user.email}</Alert>
      <p>
        Account Id will be used in the requests to retrieve the secret key
        associated with your account. For more info on how set up a request see{' '}
        <Link to="/doc">documentation</Link>
      </p>
      <Form>
        <Form.Text className="my-1">Redirect url</Form.Text>
        <Form.Control
          type="text"
          id="url"
          value={form.url}
          onChange={handleChange}
          readOnly={form.readOnly}
        />
        <Button className="my-3" variant="warning" onClick={handleUpdateUrl}>
          {form.readOnly ? 'modify url' : 'save changes'}
        </Button>
      </Form>
    </Jumbotron>
  )
}

export default UserInfo
