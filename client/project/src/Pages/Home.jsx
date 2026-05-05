import React,{useEffect} from 'react'
import Carousel from '../Component/Carousel'
import "../Css/Home.css"
import Category from '../Component/Category'
import EventCards from '../Component/EventCards'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate();
  
useEffect(()=>{
  if(localStorage.getItem('UserToken') === null){
    nav('/log');
  }
},[nav]);
  return (
    <div style={{background:"#2c3e50",overflow:"hidden"}}>
        <div className='home-container'>
    <main className='main-content'>
        <div className='carousel-with-text'>

<Carousel/>

<h1>College Event Mangement System</h1>
        </div>
    </main><br></br>
  </div>
  <Category/>
  <EventCards/>
  
    </div>
  )
}
