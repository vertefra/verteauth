import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Unlogged from '../components/Unlogged'
import Accounts from '../components/Accounts'
import { loadAccounts } from '../actions/accountsActions'
import AddAuthorization from '../components/AddAuthorization'
import UserInfo from '../components/UserInfo'

function Dashboard({ userHandlers, projectHandlers }) {
  const [user] = userHandlers
  const [projects, setProjects] = projectHandlers

  useEffect(() => {
    if (user.auth) {
      ;(async () => {
        const data = await loadAccounts()
        if (data) {
          if (data.success) {
            setProjects(data.accounts)
          } else {
            console.log('error ', data)
            setProjects(data)
          }
        }
      })()
    }
  }, [user])

  console.log(projects)

  return (
    <Container className="container">
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
            <Col lg={2}>
              {projects.length > 0 ? (
                <Accounts projectsHandlers={projectHandlers} />
              ) : (
                <h4>You don't have projects yet</h4>
              )}
            </Col>
            <Col lg={4}>
              <UserInfo userHandlers={userHandlers} />
              <AddAuthorization
                userHandlers={userHandlers}
                projectHandlers={projectHandlers}
              />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default Dashboard
