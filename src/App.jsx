import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './assets/components/Home'
import Barberos from './assets/components/Barberos'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home />,
    errorElement:'Error'
  },
  {
    path: '/barberos',
    element:<Barberos />,
    errorElement: 'Error'
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>

    </>
  ) 
}

export default App
