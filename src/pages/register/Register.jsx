import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
              connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Username' className="loginInput" />
            <input placeholder='Email' className="loginInput" />
            <input placeholder='Password' className="loginInput" />
            <input placeholder='Confirm Password' className="loginInput" />
            <span className="loginForgot">Forgot Password?</span>
            <button className='loginButton'>Sign Up</button>
            <button className='loginRegisterButton'>Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}