import axios from 'axios'

export const loadAccounts = async () => {
  const userState = JSON.parse(localStorage.getItem('userState'))
  const { ID, token } = userState

  try {
    const { data } = await axios.get(`/api/users/${ID}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (err) {
    console.log(err.request.data)
    return err.request.data
  }
}

export const createNewAccount = async (
  credentials = { username: '', password: '' }
) => {
  const userState = JSON.parse(localStorage.getItem('userState'))
  const { userId, token, key } = userState

  try {
    const { data } = await axios.post(
      `/api/users/${userId}/accounts/signup`,
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
