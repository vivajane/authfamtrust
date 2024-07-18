import Login from "./Login";
import PassWordRecovery from "./PassWordRecovery";
import PassWordReset from "./PassWordReset";
import Selection from "./Selection";
import TwoFactor from "./TwoFactor";
import login from "/login.png";
import { useState } from "react";
const LoginPage = () => {
  const [increase, setIncrease] = useState(1);
  const onClickHandler = ()=>{
    setIncrease((increase) => increase + 1);
  }
  return (
    <div className=" flex justify-between md:mx-36 md:my-20 bg-neutrall rounded"> 
      {increase === 1 && <Login onClickHandler={onClickHandler} />}
      {increase === 2 && <Selection onClickHandler={onClickHandler}/>}
      {increase === 3 && <TwoFactor onClickHandler={onClickHandler}/>}
      {increase === 4 && <PassWordRecovery onClickHandler={onClickHandler}/>}
      {increase === 5 && <PassWordReset onClickHandler={onClickHandler}/>}
      <div>
        <img className="w-[300px] h-fit" src={login} alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
