import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Unlogged from './Unlogged'
import Message from '../components/Message'
import Projects from '../components/Projects'

function Dashboard({ userHandlers, projectHandlers }) {
  const [user] = userHandlers
  const [projects, setProjects] = projectHandlers

  useEffect(() => {
    if (user.auth) {
    }
  }, [user])

  return (
    <Container>
      {!user.auth ? (
        <Unlogged />
      ) : (
        <Container>
          <Row>
            <Col className="my-3 text-center">
              <h1>Dashboard</h1>
            </Col>
          </Row>
          <Row className="my-3 px-0">
            <Col lg={4}>
              {projects.length > 0 ? (
                <Projects />
              ) : (
                <h4>You don't have projects yet</h4>
              )}
            </Col>
            <Col lg={8}>
              here all the info about the projects when click on project
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default Dashboard
