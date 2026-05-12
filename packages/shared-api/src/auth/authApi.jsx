import {apiClient, setTokens} from '../apiClient'
export const authApi = {
  login: async payload => {
    const response = await apiClient.post('/auth/login',payload)
    // setTokens(response.data.accessToken,response.data.csrfToken);
    return response.data
  },

  logout: async () => {
    const response = await apiClient.post('/auth/logout')
    return response.data
  },

  me: async () => {
    const response = await apiClient.get('/auth/me')
    return response.data
  }
}