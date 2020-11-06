import { ListGroup } from 'react-bootstrap'

const Accounts = ({ projectsHandlers }) => {
  const [projects, setProjects] = projectsHandlers
  return (
    <ListGroup>
      {console.log(projects)}

      {projects.length > 0 &&
        projects.map(p => {
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
