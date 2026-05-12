import axios from 'axios'
import store from '@srcart/shared-store/store'
const apiUrl = import.meta.env.VITE_API_URL
export const apiClient =
  axios.create({
    baseURL:apiUrl,
    withCredentials: true
  })
let accessToken = store.getState().auth.accessToken || null;
let csrfToken = store.getState().auth.csrfToken || null;

// export const setTokens = (access,csrf) =>{
//   accessToken = access;
//   csrfToken = csrf;
// }

apiClient.interceptors.request.use(
  config => {
    if(accessToken){
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (csrfToken) {config.headers['X-CSRF-Token'] = csrfToken
    }
    return config
  }
)

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status ===401 && !originalRequest._retry) {
      originalRequest._retry = true
      await apiClient.post('/auth/refresh')
      accessToken = response.data.accessToken
      return apiClient(originalRequest)
    }

    return Promise.reject(error)
  }
)