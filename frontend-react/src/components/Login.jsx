import React ,{useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authprovides'



 
const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setpassword]=useState('') 
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate('')
  const [errors,setError]=useState('')
  const {isLoggedIn,setIsLoggedIn}= useContext(AuthContext)

  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true)

    const userdata={
      username,password
    }
    console.log("userdata==>",userdata)
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userdata)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.access)
      console.log("Login successful");
      setIsLoggedIn(true)
      navigate('/')
    }catch(error){
      console.error("Invalid Credentials")
      setError('Invalid Credentials')

    }finally{
      setLoading(false)
    }
  }
  return (
    <>
          <div className='container '>
            <div className='row justify-content-center'>
              <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'>Login to the portal</h3>
                <form onSubmit={handleLogin}>
                  <div className='mb-3'>
                    <input type='text' className='form-control ' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    
                  </div>
                 <div className='mb-3'>
                   <input type='password' className='form-control ' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)}/>
                 </div>
                 {errors && <div className='text-danger'>{errors}</div>}
                 {loading ? (
                  <button type='submit' className='btn btn-info d-block mx-auto'><FontAwesomeIcon icon={faSpinner} spin/>Logging in...</button>
                 ):(
                 <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                 )}
              
                </form> 
              </div>
            </div>
          </div>
        </>
  )
}

export default Login
