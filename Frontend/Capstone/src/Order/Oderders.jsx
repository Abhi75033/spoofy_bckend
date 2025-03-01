import axios from "axios";
import { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import '../index2.css'
import { Info } from "@mui/icons-material";

function Orders() {
    const [order,seOrder]=useState([])
    const [size,seSize]=useState('')
    const [date,seDate]=useState('')

    const GetOrders = async()=>{
        try {
            const resp = await axios.get(`http://localhost:3000/api/v1/orders`,{withCredentials:true})
          const data = resp.data.data.Product
      
         

          const OrderDeatils = data.map(async(item)=>{
            const resp = await axios.get(`http://localhost:3000/api/v1/product/${item.ProductId}`)
            let product = resp.data.data
            product.size = item.size
            return product
          })

          const orders = await Promise.all(OrderDeatils)

       seOrder(orders)
            
           
        } catch (error) {
           console.log(error); 
        }
    }

    const getDate = ()=>{
        const fiveDaysLater = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
        const day = fiveDaysLater.getDate();
        const month = fiveDaysLater.toLocaleString('default', { month: 'long' });
        const year = fiveDaysLater.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
       seDate(formattedDate)
    }


    useEffect(()=>{
        GetOrders()
        getDate()
    },[])

    return ( 
        <>
        <div className="container-fluid mt-4 pb-2">
        <h4 style={{fontSize:'2rem', fontFamily:'sans-serif text-decoration-underline'}}> My Orders</h4>

        { 
            order.map((item)=>(
             <div className="">
                 <div className="d-flex gap-2 border border-1 mt-2">
               

                  <div className=" p-4">
   
                    <img src={item.image[0]} width='150'/>
                </div>
                <div className="mt-3">
                    <h4 style={{fontSize:'.9rem'}} className="me-2 " >{item.name}</h4>
                    <button className="p-2 text-primary">Size: {item.size}</button>
                    <p className="mt-3"><span style={{fontSize:'.8rem'}}>Expected Delivery Date:</span><br></br><TbTruckDelivery className="fs-5 text-warning"/>  {date}</p>
                    <button style={{backgroundColor:'#E7FFEA'}} className="p-2"><span style={{color:'#108A27'}}>CONFIRMED</span></button>
                  
                </div>
              </div> 
              
             </div>
            ))
        }
        </div>
       
        </>
     );
}

export default Orders;