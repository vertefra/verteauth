import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Unlogged = () => {
  return (
    <>
      <Container fluid>
        <Row className="my-5 mx-auto">
          <Col lg={12}>
            <h1>You are not logged in.</h1>
            <p>
              Login with your creedentials or click on{' '}
              <Link to="/signup">signup</Link> to create a new account
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Unlogged
