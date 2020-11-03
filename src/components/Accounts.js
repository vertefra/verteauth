import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'

const Accounts = ({ projectsHandlers }) => {
  const [projects, setProjects] = projectsHandlers
  console.log(projects[0])
  return (
    <ListGroup>
      {projects.map(p => {
        return <ListGroup.Item key={p.ID}>user: {p.username}</ListGroup.Item>
      })}
    </ListGroup>
  )
}

export default Accounts
