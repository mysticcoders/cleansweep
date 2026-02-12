import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './pages/App'

import "bulma/css/bulma.min.css"
import "./index.css"

const root = document.getElementById('root')

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
