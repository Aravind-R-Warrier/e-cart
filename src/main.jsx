import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import cartStore from './Redux/cartStore.js'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>

     <Provider store={cartStore}>
     <App />
     </Provider>

     </BrowserRouter>
   
  </StrictMode>,
)
