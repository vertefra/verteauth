import axios from 'axios'

export const loadAccounts = async () => {
  const userState = JSON.parse(localStorage.getItem('userState'))
  const { key, userId, token } = userState

  try {
    const { data } = await axios.get(`/api/users/${userId}/accounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
        key,
      },
    })

    return data
  } catch (err) {
    console.log(err.request.data)
    return err.request.data
  }
}
