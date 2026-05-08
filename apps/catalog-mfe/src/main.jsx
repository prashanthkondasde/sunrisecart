import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './assets/tailwind/tailwind.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/theme.css'
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
