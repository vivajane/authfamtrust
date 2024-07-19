
import './App.css'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import Recovery from './Pages/Recovery';

import SignUpPage from './Pages/SignUpPage';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "login",
      element: <LoginPage/>
    },
    {
      path: "signup",
      element: <SignUpPage/>
    },
    {
      path: "recovery",
      element: <Recovery/>
    },
   

  
   
  ])
  return <div>
    <RouterProvider router={router}/>
   
  </div>
}

export default App
