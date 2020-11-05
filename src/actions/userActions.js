import axios from 'axios'
import { defaultUserState } from '../defaultStates/defaultStates.js'
import { server } from '../index.js'

export const userLogin = async (credentials = { email: '', password: '' }) => {
  try {
    const { data } = await axios.post(`${server}api/users/login`, credentials)

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
    const { data } = await axios.post(`${server}api/users/signup`, credentials)
    return data
  } catch (err) {
    return err.response.data
  }
}

export const updateUser = async (userState = defaultUserState) => {
  console.log('UPDATING USER', userState)
  try {
    const { data } = await axios.put(
      `${server}/api/users/${userState.ID}`,
      userState,
      {
        headers: {
          Authorization: `Bearer ${userState.token}`,
        },
      }
    )
    console.log(data)
    return data
  } catch (err) {
    return err.response.data
  }
}
