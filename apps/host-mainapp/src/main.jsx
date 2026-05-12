import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyErrorBoundary from './components/Error/MyErrorBoundary.jsx';

import '@srcart/shared-ui/styles/globals.css'
import '@srcart/shared-ui/styles/theme.css'

import App from './App.jsx'
import { Provider } from 'react-redux';
//import store from './components/redux/store.jsx'; 
import {store}  from '@srcart/shared-store'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <MyErrorBoundary>
  <StrictMode>
    <App />
  </StrictMode>  
  </MyErrorBoundary>
  </Provider>

)
