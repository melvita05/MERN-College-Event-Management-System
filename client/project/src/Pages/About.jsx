import React,{useEffect} from 'react'
import IMG2 from '../Assets/clg2.webp'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const nav = useNavigate();
  
useEffect(()=>{
  if(localStorage.getItem('UserToken') === null){
    nav('/log');
  }
},[nav]);
  return (
    <div style={{backgroundColor:"#87A2FF",backgroundSize:"cover"}}>
      <div style={{backgroundImage:`url(${IMG2})`,
   paddingBottom:"300px",
      backgroundRepeat:"no-repeat",
      margin: 0,           /* Ensures no margin around the page */
  overflow:"hidden",
    backgroundSize:"800px",
    background:"87A2FF",
    
 }}>
    <h2 style={{fontSize:"50px",fontFamily:"fantasy",color:'GrayText',paddingLeft:"700px",marginTop:"150px"}}>ABOUT US</h2>
    <p style={{fontFamily:"fantasy",fontSize:"30px",paddingLeft:"700px",fontPalette:"light",color:"ActiveCaption"}}>This college event idea is all about the holistic approach to self-care, offering activities to maintain a healthy and balanced lifestyle.<br/>
     It's an opportunity for students to cultivate habits that contribute to their overall well-being.</p>
     <Link to="/event" > <Button variant="contained" color="success" style={{marginLeft:"800px"}}>
  Learn more
</Button></Link>
      </div> 
    </div>
  )
}
