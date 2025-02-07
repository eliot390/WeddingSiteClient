import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import RSVP from './pages/RSVP'
import Registry from './pages/Registry'
import Schedule from './pages/Schedule'
import Confirm from './pages/Confirm'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/registry' element={<Registry />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/rsvp' element={<RSVP />} />
      <Route path='/confirm' element={<Confirm />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
