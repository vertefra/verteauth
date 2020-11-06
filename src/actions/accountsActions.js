import axios from 'axios'
import { server } from '../index.js'

export const loadAccounts = async () => {
  const userState = JSON.parse(localStorage.getItem('userState'))
  const { ID, token } = userState

  try {
    const { data } = await axios.get(`${server}api/users/${ID}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data
  }
}

export const createNewAccount = async (
  credentials = { username: '', password: '' }
) => {
  const userState = JSON.parse(localStorage.getItem('userState'))
  const { ID, token, key } = userState

  try {
    const { data } = await axios.post(
      `${server}api/users/${ID}/accounts/signup`,
      credentials,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          key,
        },
      }
    )

    return data
  } catch (err) {
    return err.response.data
  }
}
