import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ListLawyers } from './pages/ListLawyers/Index.tsx'
import { RegisterLawyers } from './pages/RegisterLawyers/Index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListLawyers/>
  },
  {
    path: '/register',
    element: <RegisterLawyers/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
