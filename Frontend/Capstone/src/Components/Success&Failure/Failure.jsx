import { useNavigate } from 'react-router-dom';
import failure from '../../assets/fail.gif'
import '../../index2.css'
import { IoIosRefresh } from "react-icons/io";
function Failure() {
    const navigate = useNavigate()
    return ( 
       <div style={{height:'80vh'}} className="p-2 text-center fsghi ">
        <div className='' style={{marginTop:'5vh'}}>
        <h1 className='z-2 text-danger'> Paymnet Failed....!</h1>
        <img style={{marginTop:'-4%',}} src={failure} width='500' className='z-0' />
        <p style={{marginTop:'-3%'}} className='fs-5'>Your paymet has been failed, if you are facing any problem while doing Payment
            &nbsp; <a href='#'>Contact Us</a></p>
        </div>
        <div>
        <button onClick={()=>navigate('/confirm/paymentgateway')} className="learn-more bg-danger text-light mt-3 fs-5">
            <IoIosRefresh className='fs-4 fw-bold'/> Try again
        </button>
        </div>
  
       </div>
     );
}

export default Failure;