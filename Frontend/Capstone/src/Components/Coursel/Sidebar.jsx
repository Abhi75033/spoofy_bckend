import { FaBars } from "react-icons/fa";
import { Help, Home, Login, Logout } from "@mui/icons-material";
import { CgProfile } from "react-icons/cg";
import  '../../App.css'
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Tab2 from "./Tabs2";
import Out from "./Outlet";

import { PiHandsPrayingFill } from "react-icons/pi";
function Sidebar() {
    const [user,setUser] = useState(null)
const data = localStorage.getItem('user')
const users = JSON.parse(data)
const navigate = useNavigate()
const hadleLogout = async()=>{
    try {
      const resp = await axios.post('http://localhost:3000/api/v1/users/logout',null,{withCredentials:true})
      if(resp.status==200){
        console.log(resp);
        localStorage.removeItem('user')
        
      }
    } catch (error) {
      console.log(error);
    }
    }

    const isLogedin = ()=>{
        setUser(users)
      }
      
      useEffect(()=>{
        isLogedin()
      },[])

      

    return ( 
        <div className="resp1">
        <a  className="btn"  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <FaBars className="fs-4"/>
</a>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div  className="offcanvas-body widths">

    <h5 className="text-center bg-danger p-2  Mulish flag">HOMEGROWN INDIAN BRAND</h5>
    <hr style={{marginTop:'-4%'}} className="bg-dark"/>
    <div className=" align-items-center justify-content-between">
    <h4>Welcome {user? user.name : 'Guest' }</h4>
    <ul className="list-unstyled me-3 ">
  
        
          {
            user? 
            <li className="mt-2 curs"><Link to='/' onClick={hadleLogout} className="text-decoration-none text-dark Roboto ms-1 ">Logout</Link></li>
            :  <li className="mt-2 curs">
             <Link to='/login' 
              className="text-decoration-none text-dark Roboto ms-1 ">Login/singUp</Link></li>
          }
            </ul>
    </div>
    
    <hr className="bg-dark"/>

   <Tab2/>
  

<div className="sbg">
  <h5 className="ms-2 sbgs Roboto">CONTACT US</h5>
 <ul className="list-unstyled">
 <li className=" mt-2 fs-6 Roboto ms-2" >
 Help & Support</li>
 <li className=" mt-2 fs-6 Roboto ms-2" >
Feedback & Suggestion</li>
 <li className=" mt-2 fs-6 Roboto ms-2" >
Become a Seller</li>
 <li className=" mt-2 fs-6 Roboto ms-2" >
Refund and Return Policy</li>
<h5 className="ms-2 sbbs sbgs Roboto">ABOUT US</h5>
<li className=" mt-2 fs-6 Roboto ms-2" >
Our Story</li>
<li className=" mt-2 fs-6 Roboto ms-2" >
Blog</li>
 </ul>
 <h5 className="ms-2 sbbss Roboto">  Thanks <PiHandsPrayingFill/> </h5>
</div>

  </div>
 
</div>

        </div>
       
     );
}

export default Sidebar;