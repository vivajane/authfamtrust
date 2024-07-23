import "./App.css";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Recovery from "./Pages/Recovery";

import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

// import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  // const router= createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage/>
  //   },
  //   {
  //     path: "login",
  //     element: <LoginPage/>
  //   },
  //   {
  //     path: "signup",
  //     element: <SignUpPage/>
  //   },
  //   {
  //     path: "recovery",
  //     element: <Recovery/>
  //   },

  // ])
  // return <div>
  //   <RouterProvider router={router}/>

  // </div>
}

export default App;
