import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Unlogged from './Unlogged'
import Accounts from '../components/Accounts'
import { loadAccounts } from '../actions/accountsActions'

function Dashboard({ userHandlers, projectHandlers }) {
  const [user] = userHandlers
  const [projects, setProjects] = projectHandlers

  useEffect(() => {
    if (user.auth) {
      ;(async () => {
        const data = await loadAccounts()
        if (data.success) {
          setProjects(data.accounts)
        } else {
          console.log('error ', data)
          setProjects(data)
        }
      })()
    }
  }, [user.auth])

  console.log(projects)

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
                <Accounts projectsHandlers={projectHandlers} />
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
