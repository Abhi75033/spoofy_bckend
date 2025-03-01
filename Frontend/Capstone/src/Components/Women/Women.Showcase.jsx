import image1 from '../../assets/image18.jpg'
import image4 from '../../assets/image21.jpg'
import image8 from '../../assets/image25.jpg'
import image5 from '../../assets/image22.jpg'
import image2 from '../../assets/image19.jpg'
import image3 from '../../assets/imgae20.jpg'
import image6 from '../../assets/image23.webp'
import image7 from '../../assets/imgae24.jpg'

function WomenShow() {
    return ( 
        <>
        <h3 className="fw-bold text text-center">Shop by Category- Women</h3>
        <div className="row row-cols-4 mt-4 container-fluid">
            <div className="col">
                <img src={image1} className='w-100'/>
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

export default WomenShow;