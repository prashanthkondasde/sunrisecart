import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@srcart/shared-ui/styles/globals.css'
import '@srcart/shared-ui/styles/theme.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import {store} from '@srcart/shared-store'; 
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>  
  </Provider>

)
