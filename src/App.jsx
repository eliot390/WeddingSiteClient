import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import RSVP from './pages/RSVP'
import Registry from './pages/Registry'
import Schedule from './pages/Schedule'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='home' element={<HomePage/>} />
      <Route path='/registry' element={<Registry />} />
      <Route path='/schedule' element={<Schedule />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
