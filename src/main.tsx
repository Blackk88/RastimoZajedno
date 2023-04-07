import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Components
import Home from './Pages/Home'
import RootLayout from './Pages/RootLayout'
import OurWork from './Pages/OurWork'
import Videos from './Pages/Videos'
import About from './Pages/About'
import Contacts from './Pages/Contacts'

import './i18n'
import './styles/index.scss'

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

export const CONTACTS = {
  instagram: 'https://www.instagram.com/nvo_rastimo_zajedno',
  facebook: 'https://www.facebook.com/RastimoZajednoDG',
  youTube: 'https://www.youtube.com/@udruzenjeroditelja5745',
  phone: '+38269321684',
  address: 'Str. Novice Skerovica b.b, 81410-Danilovgrad',
  email: 'udruzenjeroditeljadg@gmail.com',
}
