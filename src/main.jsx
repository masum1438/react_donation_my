import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Donation from './component/Donation/Donation';
import Statistics from './component/Statistics/Statistics';
import JobDetail from './component/JobDetail/JobDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch('/jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetail></JobDetail>  ,
        loader: ()=>fetch('../jobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=>fetch('/jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
