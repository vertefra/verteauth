import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import Login from './Login'

const Header = ({ userHandlers }) => {
  const [user] = userHandlers
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
              <Button variant="primary" className="ml-3">
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
