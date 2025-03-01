import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { TbMoodKidFilled } from "react-icons/tb";
import Out from './Outlet';
import { Outlet, useNavigate } from 'react-router-dom';
import Women from '../Mens/Wome';
import Mens from '../Mens/Mens';
import Kids from '../Mens/Kids';
import { useEffect, useState } from "react";
export default function Tab2() {
  const [value, setValue] = React.useState(0);
  const [men,setMen]=useState(false)
  const [wonmen,setWomen]=useState(false)
  const [kids,setKids]=useState(false)
  const naviagte = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMen = ()=>{
    if(men==false){
      setMen(true)
      setWomen(false)
      setKids(false)
    }
  }
  const handleWomen = ()=>{
    if(wonmen==false){
      setWomen(true)
      setMen(false)
      setKids(false)
    }
  }
  const handleKids = ()=>{
    if(kids==false){
      setKids(true)
      setMen(false)
      setWomen(false)
    }
  }

  useEffect(()=>{
handleMen()
  },[])

  return (
    <div>
    <>
    <Tabs value={value} style={{width:'100%'}} onChange={handleChange} aria-label="icon tabs example">
     
      <Tab onClick={handleMen}  style={{width:'33.3%'}} label='Mens' icon={<FcBusinessman  className='fs-1' />} aria-label="phone" />
      <Tab onClick={handleWomen} style={{width:'33.3%'}} label='WoMen'icon={<FcBusinesswoman  className='fs-1' />} aria-label="phone" />
      <Tab onClick={handleKids} style={{width:'33.3%'}} 
      label='Kids'icon={<TbMoodKidFilled  className='fs-1' />} aria-label="phone" />
       
    </Tabs>
    
    </>
    {
      men &&
      <Mens/>
    }
    
  { wonmen &&
    <Women/>}

  { kids &&
    <Kids/>}
    </div>
  );
}
