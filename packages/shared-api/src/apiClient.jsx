import axios from 'axios'
import {store} from '@srcart/shared-store/store'

import { getApiConfig } from './config'

export const apiClient = axios.create({
  withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const { apiUrl } = getApiConfig()

  config.baseURL = apiUrl

  const accessToken = store.getState().auth.accessToken
  const csrfToken = store.getState().auth.csrfToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const { apiUrl } = getApiConfig()

        const response = await axios.post(
          `${apiUrl}/auth/refresh`,
          {},
          { withCredentials: true }
        )

        store.dispatch(
          setAuth({
            user: response.data.user,
            accessToken: response.data.accessToken,
            csrfToken: response.data.csrfToken,
          })
        )

        originalRequest.headers.Authorization =
          `Bearer ${response.data.accessToken}`

        return apiClient(originalRequest)

      } catch (err) {
        store.dispatch(clearAuth())
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)