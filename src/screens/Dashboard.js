import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Unlogged from './Unlogged'

function Dashboard({ userHandlers, projectHandlers }) {
  const [user, setUser] = userHandlers
  const [projects, setProjects] = projectHandlers

  return (
    <>
      {!user.auth ? (
        <Unlogged />
      ) : (
        <Container>
          <Row>
            <h1>Dashboard</h1>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Dashboard
