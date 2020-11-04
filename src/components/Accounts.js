import { ListGroup } from 'react-bootstrap'

const Accounts = ({ projectsHandlers }) => {
  const [projects, setProjects] = projectsHandlers
  console.log(projects[0])
  return (
    <ListGroup>
      {projects.map(p => {
        return (
          <ListGroup.Item key={p.ID}>
            <h6>user: {p.username}</h6>
            <footer>
              <small>_ID: {p.ID} </small>
              <br />
              <small>key: {p.key}</small>
            </footer>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default Accounts
