const API_BASE_URL = 'https://dummyjson.com'

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.users
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw error
  }
}

export const searchUsers = async (searchTerm: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/filter?key=firstName&value=${searchTerm}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.users
  } catch (error) {
    console.error('Failed to search users:', error)
    throw error
  }
}
