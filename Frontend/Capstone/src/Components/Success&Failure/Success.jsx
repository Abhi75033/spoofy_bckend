import axios from "axios";
import { useEffect, useState } from "react";
import done from '../../assets/done.gif'
import '../../index.css'
import { useNavigate } from "react-router-dom";
function Success() {
  const navigate = useNavigate()
  const [data,setData]=useState()
    const DeleteItems = async()=>{
        try {
  
          const resp = await axios.delete('http://localhost:3000/api/v1/cart/',
           {withCredentials:true})
         setData(data.data.deleted)
        } catch (error) {
          console.log(error);
        }
      }

    const CreateOrder = async()=>{
        try {
  
          const resp = await axios.post('http://localhost:3000/api/v1/cart/createorder',null,{withCredentials:true})
          if(resp.status==201){
            DeleteItems()
          }
        } catch (error) {
          console.log(error);
        }
      }
  
useEffect(()=>{
  CreateOrder()
  console.log(data);
},[])
      
    return ( 
        <div style={{height:'80vh'}}  className="p-2 text-center">
          
          <div style={{marginTop:'20vh'}}>
          <img src={done} width='100'/>
          <div>
          <h2  >Thank You</h2>
          <p className="text-center">Your order has been placed <br></br>
          An email with your order details will be you sent shortly.</p>
          </div>
          <button onClick={()=>navigate('/')} className="button mt-4">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">CONTINUE SHOPPING</span>
    </span>
</button>

          </div>
        </div>
     );
}

export default Success;