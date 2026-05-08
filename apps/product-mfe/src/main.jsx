import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
// import MyErrorBoundary from './components/Error/MyErrorBoundary.jsx';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import {store} from '@srcart/shared-store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  {/* <MyErrorBoundary> */}
  <StrictMode>
    <App />
  </StrictMode>
  {/* </MyErrorBoundary> */}
  </Provider>
  </BrowserRouter>
)
