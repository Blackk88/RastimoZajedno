import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'
import RootLayout from './components/RootLayout'
import OurWork from './components/OurWork'
import Videos from './components/Videos'
import About from './components/About'
import Contacts from './components/Contacts'
import './i18n'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/our-work',
        element: <OurWork />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
