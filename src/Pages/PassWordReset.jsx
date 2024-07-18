import React from 'react';
import Button from '../Component/Button';

const PassWordReset = ({onClickHandler}) => {
  return (
    <div className="md:px-16 overflow-hidden">
      <h1 className="text-txtblue  font-lato text-3xl font-bold py-8">
      Reset Your Password
      </h1>
      <p className="pb-3">
        Enter your new password to confirm your login
      </p>
      <form action="">
        <label className="font-lato text-base font-semibold" htmlFor="password">New Password</label>
        <input className="bg-white w-full py-2 mt-6 rounded-xl" type="password" placeholder="Enter New Password" />
        <label className="font-lato text-base font-semibold" htmlFor="confirm">Confirm Password</label>
        <input className="bg-white w-full py-2 mt-6 rounded-xl" type="password" placeholder="Confirm New Password" />

      </form>
      <div className="mt-6" onClick={onClickHandler}>
        <Button>Reset Password</Button>
      </div>
      
    </div>
  )
}

export default PassWordReset
