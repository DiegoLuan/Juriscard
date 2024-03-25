import {  createBrowserRouter } from 'react-router-dom'
import { ListLawyers } from '../pages/ListLawyers/Index.tsx' 
import { RegisterLawyers } from '../pages/RegisterLawyers/Index' 


export const router = createBrowserRouter([
    {
      path: '/',
      element: <ListLawyers/>
    },
    {
      path: '/register',
      element: <RegisterLawyers/>
    }
  ])

