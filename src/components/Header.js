import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Login from './Login'

const Header = ({ userHandlers }) => {
  const [user, setUser] = userHandlers
  return (
    <header>
      <Container>
        <Navbar bg="dark" expand="lg" className="justify-content-between">
          <Navbar.Brand href="/">verteauth</Navbar.Brand>
          {!user.auth && <Login userHandlers={userHandlers} />}
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
