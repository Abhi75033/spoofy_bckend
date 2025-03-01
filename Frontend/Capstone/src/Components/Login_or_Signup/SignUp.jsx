import { useState } from 'react';
import '../../../src/index.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
    const [user,setUser]=useState({name:'',email:'',Username:'',Password:''})
   const [ValidateError,setValidateError]=useState({})
 const navigate = useNavigate()
   const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/
   const ValidateForm=()=>{
  const errors={}
    if (!user.name) {
        errors.name="Name can not be empty"
    }
    if (!user.email) {
        errors.email="E-mail can not be empty"
    }
    if (!user.Username) {
        errors.Username="UserName can not be empty"
    }
    if (!user.Password) {
        errors.Password="password can not be empty"
    }else if(user.Password.length<8){
        errors.Passwordsword="Passwor can not less than 8 digits"
    
    }else if(!pattern.test(user.Password)){
        errors.Passwordssword=`Your password must 
        contain at least one uppercase letter, 
        one lowercase letter, one digit, and one non-word character
         (such as @, #, $, etc.). Please ensure your password meets these requirements`
    }
    return errors
   }

   
   const handler = async(e)=>{
    e.preventDefault()
    
    const errors= ValidateForm();
    if (Object.keys(errors).length===0) {
        setValidateError({})
         console.log(user);

        try {
         console.log(user);
            const resp = await axios.post('http://localhost:3000/api/v1/users/ragister',user)
            if (resp.status==201) {
               navigate('/login')
              toast.success(resp.data.data)  
              
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
    <label for="exampleInputEmail1" className="form-label fw-bolder">Name</label>
    <input type="text" className={`form-control ${ValidateError.name ? 'is-invalid':''} `} 
    onChange={(e)=>setUser({...user, name:e.target.value})}
 placeholder='@example:Jhone Doe'/>
 {
    ValidateError.name &&
    <div className='invalid-feedback'>{ValidateError.name}</div>
 }
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1 fw-bolder" className='form-label fw-bolder' >E-mail</label>
    <input type="email" className={`form-control  ${ValidateError.email ? 'is-invalid':''} `}
     placeholder='@example:jhondoe@gmail.com' 
     onChange={(e)=>setUser({...user, email:e.target.value})}/>
      {
    ValidateError.email &&
    <div className='invalid-feedback'>{ValidateError.email}</div>
        }
  </div>
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
<p className='text-center mt-4'>Already have an Account 
    <NavLink to='/login' className='ms-2'>
        Login
    </NavLink>
</p>
    </div> 
    );
}

export default SignUp;