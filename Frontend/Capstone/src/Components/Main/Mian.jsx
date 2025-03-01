import { Title } from "@mui/icons-material";
import Coursel from "../Coursel/Coursel";
import Iocnbar from "../Coursel/Tabs";
import Product from "../Product/Product";
// import Tittle from "../Coursel/tittle";
import Showcase from "../Coursel/Slider.shocase";
// import ShowcaseWomen from "../Coursel/Slider.shocase";
import WomenShow from "../Women/Women.Showcase";
import Product2 from "../Product/Product2";
import Footer1 from "../Footer/Footer1";

function Main() {
    return ( 
        <div className="inde">
            <div className="resp">
            <Iocnbar />
            </div>
        
        <Coursel/>
   
        <Product/>
        <Showcase/>
      <WomenShow/>
      <Product2/>
      <Footer1/>
        </div>
     );
}

export default Main;