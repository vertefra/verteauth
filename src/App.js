import { useState } from 'react'
import { Container } from 'react-bootstrap'

import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './screens/Dashboard'

function App() {
  const [user, setUser] = useState({
    email: '',
    key: '',
    token: '',
    userID: '',
    auth: false,
  })
  const [projects, setProjects] = useState('')

  const routes = [
    {
      component: Dashboard,
      path: '/',
      key: 'home',
    },
  ]

  return (
    <Container>
      <Header userHandlers={[user, setUser]} />
      <BrowserRouter>
        {routes.map(r => {
          return (
            <Route
              to={r.path}
              key={r.key}
              render={props => {
                return (
                  <r.component
                    {...props}
                    userHandlers={[user, setUser]}
                    projectHandlers={[projects, setProjects]}
                  />
                )
              }}
            />
          )
        })}
      </BrowserRouter>
    </Container>
  )
}

export default App
