import { FaTruckFast } from "react-icons/fa6";
import { TbRosetteDiscount } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import '../../App.css'
function Footer1() {
    return ( 
        <div className="container-fluid">
        
        <div className="row row-col-auto h-auto p-2 w-100 fbg container-fluid">
        <h5 className="text-center fs-6 text-decoration-underline">THE THINGS WE PROMISE TO DELIVER TO EVERYONE</h5>
      
            <div className="col ">
            <FaTruckFast className="fs-2 d-block m-auto text-primary"/>
            <h5 className="text-center fsgg">Fast Delivery</h5>
            </div>
            <div className="col ">
            <TbRosetteDiscount className="fs-2 d-block m-auto text-danger"/>
            <h5 className="text-center fsgg">Discounted Price</h5>
            </div>
            <div className="col ">
            <GiReturnArrow className="fs-2 d-block m-auto text-warning"/>
            <h5 className="text-center fsgg">14 Days Return Policy</h5>
            </div>
        </div>
        </div>
     );
}

export default Footer1;