import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Booking from './pages/Booking.jsx'
import Contact from './pages/Contact.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([{
  element: <AppRoutes/>,
  children: [{
    path: "/",
    element: <App/>
  },{
    path: "/booking",
    element: <Booking/>
  },{
    path: "/contact",
    element: <Contact/>
  },]
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
