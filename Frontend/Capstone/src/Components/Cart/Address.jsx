import { useEffect, useState } from 'react';
import '../../index.css'
import '../../card.css'
import flag from '../../assets/falg.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Address() {
    const [user,setUser]=
    useState({name:'',Mobile_No:'',Pincode:'',City:'',Street_Address:'',Area:'',Landmark:'',State:''})
    const [validateError,setValidateError] =useState({})
    const [addresses,setAddress] = useState([])
    const navigate = useNavigate()
    const validateForm =()=>{
        const error ={}

        if(!user.name){
            error.name ='Name is required'
        }
        if(!user.Mobile_No){
            error.Mobile_No ='Mobile number is required'
        }
        if(!user.Pincode){
            error.Pincode ='Pincode is required'
        }
        if(!user.City){
            error.City ='City is required'
        }
        if(!user.State){
            error.State ='State is required'
        }
        if(!user.Street_Address){
            error.Street_Address ='Street_Address is required'
        }
        if(!user.Area){
            error.Area ='Area is required'
        }
        

        return error

    }

    const handler =async(e)=>{
        e.preventDefault()

        const error = validateForm()

        if(Object.keys(error).length==0){
            setValidateError({})
            try {
                const resp = await axios
                .post('http://localhost:3000/api/v1/product/saveaddress',user,{withCredentials:true}) 
                
                if(resp.status ==200){
                    navigate('/confirm/paymentgateway')
                }
            } 
            catch (error) {
                console.log(error);
            }
        }else{
            setValidateError(error)
        }
    }

    const GetAddress = async()=>{
      try {
        const resp = await axios.get('http://localhost:3000/api/v1/cart/')
        setAddress(resp.data.data.address);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      GetAddress()
    },[])

    const Code = '+91'

    return ( 
    
        <div className="container-fluid pb-3 " style={{width:'100%'}}>

       
          
<div className="mt-4">
<div className='d-flex justify-content-center pb-4'>
<div class="tooltip-container">
  <span class="tooltip">Uiverse.io</span>
  <span class="text">It's a one time proccess </span>
  <span>Let's Go! 👋</span>
</div>
</div>

<form onSubmit={handler}>
  <div className="mb-3 pb-4">
    <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})}
     className={`form-control border-5 ${validateError.name ? 'is-invalid':'' } `} 
    id="exampleInputEmail1" placeholder="Full Name" aria-describedby="emailHelp"/>
    {
        validateError.name && 
        <div className='invalid-feedback'>{validateError.name}</div>
    }
  </div>

  <div className="mb-3  gap-5">
    <img src={flag} className='ms-3 z-3 resp ' width='27'  />
    <input style={{marginTop:'-2.2%',paddingLeft:'4%'}} type="text"
    onChange={(e)=>setUser({...user,Mobile_No:e.target.value})}
     placeholder={`    Mobile Number`} className={`form-control border-5 w-75 ${validateError.Mobile_No ? 'is-invalid':'' }` } id="exampleInputPassword1"/>
  {
    validateError.Mobile_No && 
    <div className='invalid-feedback'>{validateError.Mobile_No}</div>
  }
  </div>
  <div className="mb-3 ">
    <input type="text" onChange={(e)=>setUser({...user,Pincode:e.target.value})}
     className={`form-control border-5 ${validateError.name ? 'is-invalid':'' } `} 
    id="exampleInputEmail1" placeholder="Pincode/Postal code/Zipcode" aria-describedby="emailHelp"/>
    {
        validateError.Pincode && 
        <div className='invalid-feedback'>{validateError.Pincode}</div>
    }
  </div>
  <div className="mb-3 row row-cols-3  ">
   <div>
    
   <input type="text" onChange={(e)=>setUser({...user,City:e.target.value})}
     placeholder="City" className={`form-control border-5   col ${validateError.City ? 'is-invalid':'' }`} id="exampleInputPassword1"/>
   {
    validateError.City && 
    <div className='invalid-feedback'>{validateError.City}</div>
   }
   </div>
<div>
<input type="text" onChange={(e)=>setUser({...user,State:e.target.value})} 
    placeholder="State" className={`form-control border-5 ms-2  col ${validateError.State ? 'is-invalid':'' }`} id="exampleInputPassword1"/>
  {
    validateError.State && 
    <div className='invalid-feedback'>{validateError.State}</div>
  }
</div>
   
  </div>
  <div className="mb-3">
    <input type="text" onChange={(e)=>setUser({...user,Street_Address:e.target.value})}
     placeholder="Flat no/Bulding,street name" className={`form-control border-5 mt-4 ${validateError.Street_Address ? 'is-invalid':'' }`} id="exampleInputPassword1"/>
  {
    validateError.Street_Address && 
    <div className='invalid-feedback'>{validateError.Street_Address}</div>
  }
  </div>
  <div className="mb-3">
    <input type="text" onChange={(e)=>setUser({...user,Area:e.target.value})}
     placeholder="Area/Locality" className={`form-control border-5 mt-4 ${validateError.Area ? 'is-invalid':'' }`} id="exampleInputPassword1"/>
  {
    validateError.Area && 
    <div className='invalid-feedback'>{validateError.Area}</div>
  }
  </div>
  <div className="mb-3">
    <input type="text" onChange={(e)=>setUser({...user,Landmark:e.target.value})}
     placeholder="Landmark(Optional)" className={`form-control border-5 mt-4 ${validateError.Landmark ? 'is-invalid':'' }`} id="exampleInputPassword1"/>
  </div>

  <div className=' pb-3'>
    Save Address As
  <div class="wrapper mt-1">
  <div class="option">
    <input checked="" value="option1" name="btn" type="radio" class="input" />
    <div class="btn">
      <span class="span">HOME</span>
    </div>
  </div>
  <div class="option">
    <input value="option2" name="btn" type="radio" class="input" />
    <div class="btn">
      <span class="span">OFFICE</span>
    </div>
  </div>
  <div class="option">
    <input value="option3" name="btn" type="radio" class="input" />
    <div class="btn">
      <span class="span">OTHER</span>
    </div>
  </div>
</div>

  </div>

 <div>
 <button type="submit" className="btn btn-primary p-2 fs-5 Roboto">Next</button>
 </div>
</form>
</div>


        </div>
     );
}

export default Address;