
import { IoShirt } from "react-icons/io5";
import { PiPantsFill } from "react-icons/pi";
import { LuFootprints } from "react-icons/lu";
import { GiDress } from "react-icons/gi";
import { GiArmoredPants } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { GiShorts } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";
import { TbHorseToy } from "react-icons/tb";

import '../../App.css'
function Mens() {

    return (
         <div className="mt-4">
   <ul className="list-unstyled ">
   <li className=" mt-2 fs-5 Playfair" > <TbHorseToy className="mfs  mbgs"/> &nbsp; 
   Toys</li>
   <li className=" mt-2 fs-5 Playfair" > <IoShirt className="mfs  mbgs"/> &nbsp; T-shirts Boy/Girl </li>
   <li className=" mt-2 fs-5 Playfair" > <IoShirtSharp className="mfs  mbgs"/>
    &nbsp;  Girls Tops </li>
   <li className=" mt-2 fs-5 Playfair" > <PiShirtFoldedFill className="mfs  mbgs"/>
    &nbsp;  Shirt Boy/Girl </li>
   <li className=" mt-2 fs-5 Playfair" > <GiArmoredPants className="mfs  mbgs"/>
    &nbsp;  Pants Boy/Girl </li>
   <li className=" mt-2 fs-5 Playfair" > <PiPantsFill className="mfs  mbgs"/>
    &nbsp;  Joggers Boys/Girl </li>
   <li className=" mt-2 fs-5 Playfair" > <GiSchoolBag className="mfs  mbgs"/>
    &nbsp; School Bags </li>
  
   </ul>
    </div>
    );
}

export default Mens;