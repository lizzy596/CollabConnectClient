import Route from '../Models/route'
import { DefaultLayout } from '../Layouts'
import { Home } from '../Views'


const publicRoutes: Route[] = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    roles: [],
    element: Home
  }
]

export default publicRoutes