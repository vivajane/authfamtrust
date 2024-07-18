
import Button from '../Component/Button'

const TwoFactor = ({onClickHandler}) => {
  return (
    <div className="md:px-16 overflow-hidden">
        <h1 className='text-txtblue  font-lato text-3xl font-bold py-8'>Two-Factor Authentication</h1>
        <p className='pb-4'>Enter the 6-digit code send to you to confirm your login</p>
        <form action="">
            <input type="tel" placeholder='Enter OTP' />
        </form>
        <div className='my-16' onClick={onClickHandler}>
            <Button/>
        </div>

      
    </div>
  )
}

export default TwoFactor
