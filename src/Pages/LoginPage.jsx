import Login from "./Login";
import login from "/login.png";
const LoginPage = () => {
  return (
    <div className=" flex justify-between md:mx-36 md:my-20 bg-neutrall"> 
      <Login />
      <div>
        <img className="w-[300px] h-fit" src={login} alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
