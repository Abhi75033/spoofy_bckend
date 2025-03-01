import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../App.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import ProductDetails from "../Product_Details/Product.Details";
import Nothing from "../Nothing&404/Nothing";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [cartData, setCartData] = useState([]);
  const [cartI, setcartItems] = useState([]);
  const [pro, setPro] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [like, setLike] = useState([]);
  const [sums,setSum] = useState(0)
  const [discount,setDiscount] = useState(0)
  const [count,setCount]=useState(0)
  const navigate = useNavigate()
  const [addresses,setAddress] = useState([])

  const handleIncrement = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
    const grandtotal = Object.values(productQuantities)
      let sum = 1
      grandtotal.map(item=>sum+=item)
      setCount(sum)
  };

  const handleDecrement = (productId) => {
    if (productQuantities < 1) {
      toast.error("Quantity can not be less tahn 1");
    } else {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: (prevQuantities[productId] || 1) - 1,
      }));
      const grandtotal = Object.values(productQuantities)
      let sum = 1
      grandtotal.map(item=>sum+=item)
      setCount(sum)
    }
  };



  const youmaylike = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/api/v1/product/getlimiPro3`
      );
      setLike(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cartproducts = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/api/v1/cart/cart`,
        { withCredentials: true }
      );

      console.log(resp);

      const data = resp.data.message;

      console.log(data);

      const productDetailsPromises = data.map(async (item) => {
        console.log('item',item.ProductId);
        const resp = await axios.get(
          `http://localhost:3000/api/v1/cart/${item.ProductId}`
        );
        let product = resp.data.data;
        product.size = item.size;
        return product;
      });

      const productDetails = await Promise.all(productDetailsPromises);
      setPro(productDetails);
      let sum = 0
      const total = productDetails.map((item)=>{
        return sum +=item.Price
      })
      let sum2 = 0
      const discoundetTotal = productDetails.map((item)=>{
        return sum2+=item.Discounted_Price
      })

    
      
      setSum(sum)
      setDiscount(sum2)
    } catch (error) {
      console.log(error);
    }
  };

  const Removefromcart = async (producId) => {
    try {
      console.log(producId);
      const resp = await axios.delete(
        `http://localhost:3000/api/v1/product/remove/${producId}`,
        { withCredentials: true }
      );
      if (resp.status == 200) {
        cartproducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetAddress = async()=>{
    try {
      const resp = await axios.get('http://localhost:3000/api/v1/cart/')
      setAddress(resp.data.data.address);
    } catch (error) {
      console.log(error);
    }
  }
 

 

  useEffect(() => {
    cartproducts();
    youmaylike();
    GetAddress()
  }, []);

  return (
    <>
      { pro.length? 
        <div className="row row-cols-auto container mt-3">
        <div className="col">
          <h3 className="Mulish">
            My Bag<span className="fw-lighter"> {pro.length} item(s) </span>{" "}
          </h3>
          <div>
            {pro.map((item) => (
              <div key={pro.indexOf(item)} className="border mt-3  p-2">
                <div className=" d-flex gap-2">
                    
                  <img src={item.image[0]} className="cartimage" width="150" />
                  <div className=" mt-3 ms-3">
                    <h3>
                      ₹{item.Price} &nbsp;
                      <span className="fs-6 text-decoration-line-through cds">
                        ₹{item.Discounted_Price}
                      </span>
                    </h3>
                    <h5 style={{ marginTop: "-2.5%" }} className="text-success">
                      You saved {item.Discounted_Price - item.Price}!
                    </h5>
                    <p style={{ marginTop: "-1%" }} className=" cds fw-bold">
                      {item.name}
                    </p>
                    <p style={{ marginTop: "-2.5%", fontSize: ".7rem" }}>
                      Tryme®
                    </p>
                    <div className=" d-flex ">
                      <span
                        type="button"
                        class="btn  w-75 text-success p-2 bg-transparent border cbsfd "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                      >
                        <button
                          onClick={() => handleIncrement(item._id)}
                          className="text-success bg-transparent border-0"
                        >
                          <BiPlus />
                        </button>
                        <span className="text-primary">Qty</span>:
                        <span>{productQuantities[item._id] || 1}</span>
                        <button
                          onClick={() => handleDecrement(item._id)}
                          className="bg-transparent border-0 text-danger"
                        >
                          <BiMinus />
                        </button>
                      </span>

                      <button
                        type="button"
                        class="btn p-2 w-50 ms-1 mt-1 bg-transparent border cbsfd "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop2"
                      >
                        <span className="text-primary ">Size:</span>:
                        <b>{item.size}</b>
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div
                  style={{ marginTop: "-12%" }}
                  className="mt-4 text-center "
                >
                  {/* <h4 className="Mulish  p-2 fsgss" style={{fontSize:'1.5rem',marginTop:'-2%'}}>REMOVE ITEM</h4> */}
                  <div style={{ cursor: "pointer" }} class="del">
                    <hr></hr>
                    <div onClick={() => Removefromcart(item._id)}>
                      REMOVE FROM CART
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr></hr>
          <div className="resp">
            <h4 className="Roboto fw-bold mt-2 resp">You may also like</h4>
            <div className="container row row-cols-auto">
            {like.map((item) => (
             <div className="row mt-2 ms-2 row-cols-auto">
              <div class="card" style={{width: "18rem",height:'auto'}}>
  <img onClick={()=>navigate(`/home/product/details/${item._id}`)} src={item.image[0]} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className="Roboto">Tryme <sup>®</sup></p>
  <p className="card-title para Mulish">{item.name}</p>
    <div className="d-flex gap-1 mt-2">

                <h5 className="fw-bold">₹{item.Price}</h5>
                <h6 className="text-decoration-line-through pfs ms-2 ">{item.Discounted_Price}</h6>
                <h6 className="ms-2 fw-bold text-success">
                    {Math.floor(((item.Discounted_Price-item.Price)/item.Discounted_Price)*100)}% OFF</h6>
              </div>
  </div>
</div>       

                    
             </div>
            ))}
            </div>
          </div>
        </div>
        {/* first div ends here */}
        <div className="col">
            <div className="w-100 border p-2  " style={{marginTop:'2.5rem',width:'100%'}} >
            <button className="p-3 fs-6 bshj">Apply Coupon / Gift Card / Referral
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
           <span>Reddem <FaAngleDoubleRight className="text-primary fs-5"/></span></button>
           <div className="msphj p-2 mt-2 text">
           <h5 className="ms-3">PRICE SUMMARY</h5>
           </div>
           <div className="mt-2">
          
          <h4 className=" fs-6">Total MRP (Incl. of taxes) 
            <span className=" float-end me-2 fs-6">₹{discount}</span></h4>
          <h4 className=" fs-6"> Delivery
            <span className=" text-success float-end me-2 fs-6">Free</span></h4>
          <h4 className=" fs-6"> Discount
            <span className=" text-success float-end me-2 fs-6">-{discount-sums}</span></h4>
          <div className="bg-dark p-2 text-light">
          <h4 className=" fs-6 "> Grand Total
          <span className="  float-end me-2 fs-6">₹{(discount-(discount-sums))}</span></h4>
          </div>
         
           </div>
            </div>
            <button onClick={addresses.length?()=>navigate('/confirm/paymentgateway') : ()=>navigate('/address')} class="cssbuttons-io-button">
Let's Go
  <div class="icon ">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

        </div>
      </div> : <Nothing/>
      }
      <ToastContainer />
      {
        console.log(pro)
      }
    </>
  );
}

export default Cart;
