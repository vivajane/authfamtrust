import React from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";


const Hero = () => {
  return (
    <div className='bg-bg md:bg-cover md:h-screen bg-cover bg-no-repeat'>
      <div className='md:px-24 px-6 py-11 h-screen'>
        <h1 className='font-lato md:text-5xl text-3xl font-bold text-white md:pt-11 pb-6'>Empower Your <br /> Family's Financial <br /> Future</h1>
        <p className='font-lato md:text-xl text-[13px] font-semibold text-white'>Join thousands of families who trust FamTrust to <br /> simplify their financial lives. Start managing your <br /> family's finances with ease and confidence.</p>
        <div className='md:py-8 py-16'>
            <button bg-bluey className='bg-bluey px-5 py-2 rounded-lg text-white'>Start Free Trial Today</button>
        </div>

      </div>
    </div>
  )
}

export default Hero
