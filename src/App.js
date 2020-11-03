import { useState } from 'react'
import { Container } from 'react-bootstrap'

import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './screens/Dashboard'
import Signup from './screens/Signup'

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('userState')) || {
      email: '',
      key: '',
      token: '',
      userID: '',
      auth: false,
    }
  )
  const [projects, setProjects] = useState('')

  const routes = [
    {
      render: props => (
        <Dashboard
          {...props}
          userHandlers={[user, setUser]}
          projectHandlers={[projects, setProjects]}
        />
      ),
      path: '/',
      key: 'home',
      exact: true,
    },
    {
      render: props => <Signup {...props} userHandlers={[user, setUser]} />,
      path: '/signup',
      key: 'signup',
    },
  ]

  console.log('rendering')

  return (
    <Container>
      <BrowserRouter>
        <Header userHandlers={[user, setUser]} />
        {routes.map(r => {
          return <Route {...r} />
        })}
      </BrowserRouter>
    </Container>
  )
}

export default App
