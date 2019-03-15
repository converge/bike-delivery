export const TOKEN_KEY = "bike-delivery"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const isAdminAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token !== null) {
    try {
      const payload = (JSON.parse(atob(token.split('.')[1])))
      return (payload.isAdmin === 1)
    } catch (e) {
      return false
    }
  }
  return false
}
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}
export const getUserId = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token !== null) {
    try {
      const payload = (JSON.parse(atob(token.split('.')[1])))
      return payload.id
    } catch (e) {
      return false
    }
  }
  return false
}