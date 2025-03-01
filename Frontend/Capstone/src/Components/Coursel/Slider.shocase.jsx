import image1 from '../../assets/image10.jpg'
import image4 from '../../assets/image13.jpg'
import image8 from '../../assets/image17.jpg'
import image5 from '../../assets/image14.jpg'
import image2 from '../../assets/image11.webp'
import image3 from '../../assets/image12.webp'
import image6 from '../../assets/image15.webp'
import image7 from '../../assets/image16.webp'
import { Link, useNavigate } from 'react-router-dom'

function Showcase() {
    const navigate = useNavigate()
    return ( 
        <>
        <h3 className="fw-bold text text-center fs-5 ms-3">Shop by Category- Men</h3>
        <div className="row row-cols-4 mt-4 container-fluid">
            <div style={{cursor:'pointer'}} className="col">
                <Link to='/cart'><img  src={image1} className='w-100'/></Link>
            </div>
            <div className="col">
                <img src={image2} className='w-100'/>
            </div>
            <div className="col">
                <img src={image3} className='w-100'/>
            </div>
            <div className="col">
                <img src={image4} className='w-100'/>
            </div>
            <div className="col mt-4">
                <img src={image5} className='w-100'/>
            </div>
            <div className="col mt-4">
                <img src={image6} className='w-100'/>
            </div>
            <div className="col mt-4">
                <img src={image7} className='w-100'/>
            </div>
            <div className="col mt-4">
                <img src={image8} className='w-100'/>
            </div>
        
            
        </div>
        </>
     );
}

export default Showcase;