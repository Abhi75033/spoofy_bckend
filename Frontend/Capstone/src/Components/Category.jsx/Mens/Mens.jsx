import Showcase from "../../Coursel/Slider.shocase";
import Product from "../../Product/Product";
import MensShowCase from "../mens.shocase";
import MensHeaderCoursel from "./Mens.Header.Coursel";
import MensProductShowcase from "./Mes_Category_Page/Mens.productShowcase";

function MensFaison() {
    return ( 
    <div className="pb-5">
    <div>
    <MensHeaderCoursel/>
    <div style={{marginTop:'-30%'}}>
    <MensProductShowcase/>
    </div>
    </div>
    <div className="container-fluid">
    <MensShowCase/>
    </div>
    </div> 
    );
}

export default MensFaison;