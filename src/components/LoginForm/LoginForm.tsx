
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import '../LoginForm/LoginForm.css';

function LoginForm() {
  return (
    <div>
        <div className="wrapper">
            <form action="">
                <h1>Login Form</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <PersonIcon className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <LockIcon className='icon'/>
                </div>  

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account?<a href="#"> Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
