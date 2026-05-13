import {apiClient} from '../apiClient'
export const authApi = {
  login: async payload => {
    const response = await apiClient.post('/auth/login',payload)
    return response.data
  },

  logout: async () => {
    const response = await apiClient.post('/auth/logout')
    return response.data
  },

  refresh: async () => {
    const response = await apiClient.post('/auth/refresh')
    // console.log("etete",response.data);
    return response.data
  }
}