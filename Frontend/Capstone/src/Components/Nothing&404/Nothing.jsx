import nothing from '../../assets/nothing.gif'
import sad from '../../assets/crying.gif'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
import '../../App.css'
import { ShoppingBag } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Nothing() {
    const navigate = useNavigate()
    return ( 
        <div>
            <div className='d-flex justify-content-center'>
        <img src={nothing} width='600'/>
        </div>
        <div>
            <h3 className='text-center pb-2 fw-light Mulish fs-3'>Nothing in the cart.....
                </h3>
        </div>
       <div className='d-flex justify-content-center pb-5'>
       <button onClick={()=>navigate('/')} className="learn-more fs-5 text-primary"> Continue Shoping <FaAngleDoubleRight/>
       </button>
       </div>
        </div>
     );
}

export default Nothing;