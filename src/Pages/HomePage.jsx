import { NavLink } from "react-router-dom"
function HomePage() {
  
  return <div className="bg-bluey px-24 py-4 flex justify-between">
    <NavLink className="hover:text-white" to="login">LOGIN</NavLink>
    <NavLink className="hover:text-white" to="signup">SIGNUP</NavLink>
   
   
  </div>
}

export default HomePage;
