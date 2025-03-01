import { useState } from 'react';
import '../../../src/index.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
    const [user,setUser]=useState({name:'',email:'',Username:'',Password:''})
   const [ValidateError,setValidateError]=useState({})
   const [data,setdata]=useState([])
 const navigate = useNavigate()
   const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/
   const ValidateForm=()=>{
  const errors={}
    if (!user.Username) {
        errors.Username="UserName can not be empty"
    }
    if (!user.Password) {
        errors.Password="password can not be empty"
    }
    return errors
   }

   
   const handler = async(e)=>{
    e.preventDefault()
    
    const errors= ValidateForm();
    if (Object.keys(errors).length===0) {
        setValidateError({})

        try {
            const resp = await axios.post('http://localhost:3000/api/v1/users/login',user, 
                {withCredentials:true})
            if (resp.status==200) {
                localStorage.setItem('user',JSON.stringify(resp.data.data.user))
               navigate('/')
              toast.success(resp.data.data.message)  
              
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }else{
        setValidateError(errors)
    }
    
   }
    return ( 
    <div className="container-fluid">
    <h1 className="text-center mt-2 fon1">Signup/Login</h1>
    <hr/>
    <form onSubmit={handler}>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label fw-bolder">UserName</label>
    <input type="text" placeholder='@example:JhonDoe123....'
    className={`form-control ${ValidateError.Username? 'is-invalid':''} `} 
    onChange={(e)=>setUser({...user, Username:e.target.value})}/>
   {
    ValidateError.Username &&
    <div className='invalid-feedback'>{ValidateError.Username}</div>
        }
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label fw-bolder">Password</label>
    <input type="password" placeholder='@example:jhondoe@123...' 
     className={`form-control ${ValidateError.Password ? 'is-invalid':''} `} 
   onChange={(e)=>setUser({...user, Password:e.target.value})}/>
   {
    ValidateError.Password &&
    <div className='invalid-feedback'>{ValidateError.Password}</div>
 }
  </div>
  <button type="submit" className="btn mt-2 btn-primary w-100 p-2 fs-5 link-opacity-100-hover">Submit</button>
</form>
<ToastContainer/>
<p className='text-center mt-4'>Create an Account 
    <NavLink to='/signup' className='ms-2'>
        SignUp
    </NavLink>
</p>
    </div> 
    );
}

export default Login;