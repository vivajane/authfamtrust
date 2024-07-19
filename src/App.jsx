
import './App.css'
import LoginPage from './Pages/LoginPage'
// import PassWordRecovery from './Pages/PassWordRecovery';
// import PassWordRecovery from './Pages/PassWordRecovery';
import Recovery from './Pages/Recovery';

import SignUpPage from './Pages/SignUpPage';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const router= createBrowserRouter([
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
