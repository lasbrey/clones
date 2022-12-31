import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('../pages/Home'))


const routes = [
  {
    path: '/', // the url
    component: Home, // view rendered
  }
]

export default routes
