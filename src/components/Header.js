import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { defaultUserState } from '../defaultStates/defaultStates'
import Login from './Login'

const Header = ({ userHandlers }) => {
  const [user, setUser] = userHandlers

  const handleLogout = () => {
    localStorage.removeItem('userState')
    localStorage.removeItem('token')
    setUser(defaultUserState)
  }

  return (
    <header>
      <Container>
        <Navbar bg="dark" expand="lg" className="justify-content-between">
          <Navbar.Brand href="/">verteauth</Navbar.Brand>
          {!user.auth ? (
            <Login userHandlers={userHandlers} />
          ) : (
            <Navbar.Text>
              <Navbar.Text>Welcome {user.email}</Navbar.Text>
              <Button variant="primary" className="ml-3" onClick={handleLogout}>
                logout
              </Button>
            </Navbar.Text>
          )}
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
