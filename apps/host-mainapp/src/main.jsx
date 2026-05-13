import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyErrorBoundary from './components/Error/MyErrorBoundary.jsx';

import '@srcart/shared-ui/styles/globals.css'
import '@srcart/shared-ui/styles/theme.css'
import { authApi,setApiConfig } from '@srcart/shared-api'

setApiConfig({
  apiUrl: import.meta.env.VITE_API_URL,
})
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store}  from '@srcart/shared-store'
import {
  setAuth,
  clearAuth,
} from '@srcart/shared-store'
const bootstrapAuth = async () => {
  try {
    const response = await authApi.refresh()
    // console.log("logoutressponse",response.data.success)
    store.dispatch(
      setAuth({
        user: response.user,
        accessToken: response.accessToken,
        csrfToken: response.csrfToken,
      })
    )

  } catch (error) {
    // console.log(error)
    console.log("REFRESH ERROR", error)
    // console.log("RESPONSE",error?.response)
    // console.log("DATA",error?.response?.data)
    store.dispatch(clearAuth())
  }
}
bootstrapAuth().finally(() => {
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <MyErrorBoundary>
  <StrictMode>
    <App />
  </StrictMode>  
  </MyErrorBoundary>
  </Provider>
)
})
