import axios from 'axios'

export const userLogin = async (credentials = { email: '', password: '' }) => {
  try {
    const { data } = await axios.post('/api/users/login', credentials)

    data.auth = true

    localStorage.setItem('userState', JSON.stringify(data))
    localStorage.setItem('token', data.token)

    return data
  } catch (err) {
    return err.response.data
  }
}

export const userSignUp = async (
  credentials = { email: '', passsword: '' }
) => {
  try {
    const { data } = await axios.post('api/users/signup', credentials)
    return data
  } catch (err) {
    return err.response.data
  }
}
