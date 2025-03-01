import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import FooterContent from "./Footer.content";
import { AiFillCaretUp } from "react-icons/ai";

function Footer() {
    const [drop,setDrop] = useState(<FaCaretDown className="fs-1"/>)
    const [footer,setFooter]=useState(false)

    const showFooter = ()=>{
       if(footer==false){
        setFooter(true)
        setDrop(<AiFillCaretUp className="fs-1"/>)
       }else if(footer ==true){
        setFooter(false)
        setDrop(<FaCaretDown className="fs-1"/>)
       }else{
        false
       }
    }

    return ( 
        <>
        <div className="text-center p-3 ffsg">
            <h4 className="Roboto text-light fcc" onClick={showFooter}>Show More About TryMe{drop}</h4>
        </div>
        {
            footer &&
            <FooterContent/>
        }
        </>
     );
}

export default Footer;