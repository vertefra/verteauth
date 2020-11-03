import axios from 'axios'

export const userLogin = async (credentials = { email: '', password: '' }) => {
  try {
    const { data } = await axios.post('/api/users/login', credentials)
    localStorage.setItem('token', data.token)
    return data
  } catch (err) {
    return err
  }
}
