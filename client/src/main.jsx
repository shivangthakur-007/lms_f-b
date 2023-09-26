// component imports
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'

// css imports
import './index.css'

// library Imports
import ReactDOM  from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster />   
  </ BrowserRouter >
  </ Provider>
)
