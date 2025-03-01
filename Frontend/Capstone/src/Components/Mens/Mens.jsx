
import { IoShirt } from "react-icons/io5";
import { LuFootprints } from "react-icons/lu";
import { PiPantsFill } from "react-icons/pi";
import { GiArmoredPants } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { GiShorts } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import '../../App.css'
function Mens() {

    return (
         <div className="mt-4">
   <ul className="list-unstyled ">
   <li className=" mt-2 fs-5 Playfair" > <LuFootprints className="mfs  mbgs"/> &nbsp; 
   Accessories</li>
   
   <li className=" mt-2 fs-5 Playfair" > <PiPantsFill className="mfs  mbgs"/>
    &nbsp;  Joggers </li>
   <li className=" mt-2 fs-5 Playfair" > <GiArmoredPants className="mfs  mbgs"/>
    &nbsp;  Jeans </li>
   <li className=" mt-2 fs-5 Playfair" > <PiShirtFoldedFill className="mfs  mbgs"/>
    &nbsp;  Shirt </li>
   <li className=" mt-2 fs-5 Playfair" > <GiShorts className="mfs  mbgs"/>
    &nbsp;  Shorts </li>
   <li className=" mt-2 fs-5 Playfair" > <GiRunningShoe className="mfs  mbgs"/>
    &nbsp;  Sneakers </li>
   <li className=" mt-2 fs-5 Playfair" > <GiSchoolBag className="mfs  mbgs"/>
    &nbsp;  Bags </li>
    <li className=" mt-2 fs-5 Playfair" > <IoShirt className="mfs  mbgs"/> &nbsp;  OverSized T-shirts </li>
   </ul>
    </div>
    );
}

export default Mens;