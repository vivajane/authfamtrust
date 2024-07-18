import Button from "../Component/Button";
import { NavLink } from "react-router-dom";

const PassWordRecovery = ({ onClickHandler }) => {
  return (
    <div className="md:px-16 overflow-hidden">
      <h1 className="text-txtblue  font-lato text-3xl font-bold py-8">
        PassWord Recovery
      </h1>
      <p className="pb-3">
        Enter the 6-digit code send to you to confirm your login
      </p>
      <form action="">
        <label className="font-lato text-base font-semibold" htmlFor="email">Email</label>
        <input className="bg-white w-full py-2 mt-6 rounded-xl" type="tel" placeholder="Enter OTP" />
      </form>
      <div className="mt-6" onClick={onClickHandler}>
        <Button>Send Reset Link</Button>
      </div>
      {/* <NavLink to="resend" className={({isActive}) => {
            isActive ? "text-txtblue" : "text-black"
        }}>Resend Link</NavLink> */}
      <div className="text-center mb-4 py-4">
        <a
          className="text-txtblue font-Lato text-base font-bold text-center"
          href="#"
        >
          Resend Link
        </a>
      </div>
    </div>
  );
};

export default PassWordRecovery;
