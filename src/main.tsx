import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'
import RootLayout from './components/RootLayout'
import About from './components/About'
import HelpUs from './components/HelpUs'
import Gallery from './components/Gallery'
import Contacts from './components/Contacts'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/volunteering',
        element: <HelpUs />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
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
