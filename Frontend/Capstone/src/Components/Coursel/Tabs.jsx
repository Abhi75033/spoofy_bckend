import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import '../../App.css'
import {
  AcUnitOutlined,
  AirportShuttleOutlined,
  BedOutlined,
  BungalowOutlined,
  CastleOutlined,
  CottageOutlined,
  DeckOutlined,
  DomainVerification,
  DownhillSkiing,
  FilterHdrOutlined,
  FoundationOutlined,
  HotTubOutlined,
  LocationCityOutlined,
  Pool,
  SailingOutlined,
  SurfingOutlined,
  Token,
  Window,
} from "@mui/icons-material";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { BsViewList } from "react-icons/bs";
import { BiWindow } from "react-icons/bi";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Iocnbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="float">
    <Box
      sx={{
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        bgcolor: "background.paper",
      }}
      
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
        className="Roboto"
      >
        <Tab onClick={()=>navigate('home/mens')} className="Roboto" style={{fontSize:'100%'}} label='MEN' /> 
        <Tab  className="Roboto" style={{fontSize:'100%'}}  label='WOMEN' /> 
         <Tab className="Roboto" style={{fontSize:'100%'}}  label='ACCESSORIES' /> 
          <Tab className="Roboto" style={{fontSize:'100%'}}  label='SNEAKERS'  />
          <Tab className="Roboto" style={{fontSize:'100%'}}  label='TYME X GOOGLE' />
          <Tab className="Roboto" style={{fontSize:'100%'}}  label='TYME AIR'/>
        
        <Tab className="Roboto" style={{fontSize:'100%'}}  label='ACCESSORIES' />

       <Tab className="Roboto" style={{fontSize:'100%'}}  label='COUSTMIZATION' />
       
       <Tab className="Roboto" style={{fontSize:'100%'}}  label='PLUS SIZE' />

       
       <Tab className="Roboto" style={{fontSize:'100%'}}  label='BSETSELLERS'/>
      
       <Tab className="Roboto" style={{fontSize:'100%'}}  label='SHORTS'/>
       
   
        <Tab className="Roboto" style={{fontSize:'100%'}}  label='KIDS BOYS'/>

   
      <Tab className="Roboto" style={{fontSize:'100%'}}  label='KIDS GIRLS' />
      
      
        <Tab className="Roboto" style={{fontSize:'100%'}}  label='DAILY WEAR'/>
        
       
       <Tab className="Roboto" style={{fontSize:'100%'}}  label='PARTY WEAR' />

      
       <Tab className="Roboto" style={{fontSize:'100%'}}  label='SUMMER FAISHON' />
       
        
       
      </Tabs>
    </Box>
    </div>
  );
}



