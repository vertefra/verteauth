import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Projects = ({ projects }) => {
  return (
    <ListGroup>
      {projects.map(p => {
        return <ListGroup.Item>Projects</ListGroup.Item>
      })}
    </ListGroup>
  )
}

export default Projects
