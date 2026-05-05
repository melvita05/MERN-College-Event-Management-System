import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../Css/Carousel.css"

export default function Carousel() {
    const images =[
        require("../Assets/event1.jpg"),
        require("../Assets/event2.jpg"),
       require("../Assets/event3.jpg")
    
    ]

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000); // Change image every 3 seconds
  return () => clearInterval(interval);
}, []); 
return (
<div className='carousel-container'>
    {images.map((image, index)=>(
        <div
        key={index}
        className={`carousel-image ${index === currentIndex ? 'active': ''}`} 
        style={{backgroundImage: `url(${image})`}}
        
        />

    ))}
  
</div>
)
}