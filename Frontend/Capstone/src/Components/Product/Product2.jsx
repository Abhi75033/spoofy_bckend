import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../App.css'
import { useNavigate } from "react-router-dom";
function Product2() {
    const [data,setData]=useState([])
    const navigate = useNavigate()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 882 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 882, min: 464 },
          items: 2.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.6
        }
      };

      const getPro = async()=>{
        try {
            const resp = await axios.get("http://localhost:3000/api/v1/product/getlimiPro2")
            const requiresdData = resp.data.data.splice(0,10)
            setData(resp.data.data)
           
        } catch (error) {
            
        }
      }

      useEffect(()=>{
        getPro()
      },[])

    return ( 
        <>
        <h3 className="text-center Roboto" >EFFORTLESSLY STYLISH BESTSELLERS</h3>
<Carousel responsive={responsive} className="mt-4 container-fluid">

    {
        data.map((item)=>(
            <div>        
    <div class="card" style={{width: "16rem",height:'auto'}}>
  <img onClick={()=>navigate(`/home/product/details/${item._id}`)} src={item.image[0]} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className="Roboto">Tryme <sup>®</sup></p>
  <p className="card-title para Mulish">{item.name}</p>
    <div className="d-flex gap-1 mt-2">

                <h5 className="fw-bold">₹{item.Price}</h5>
                <h6 className="text-decoration-line-through pfs ms-2 ">
                  {item.Discounted_Price}</h6>
                <h6 className="ms-2 fw-bold text-success">
                    {Math.floor(((item.Discounted_Price-item.Price)/item.Discounted_Price)*100)}% OFF</h6>
              </div>
  </div>
</div>
                
            </div>
        ))
    }

</Carousel>;
        </>
     );
}

export default Product2;