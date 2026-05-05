import React,{useEffect,useState} from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import IMG2 from "../Assets/bd.jpeg"
import "../Css/Cat.css"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import axios from 'axios';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export default function Category() {
  const host= "http://127.0.0.1:8005";
  const [category, setCategory] = useState([]);

  
    useEffect(()=>{
      axios.get(`${host}/use/getcat`)
      .then((res)=>{
        
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[]);

  return (
    <div>

{/*< div style={{backgroundImage:`url(${IMG2})`,
    backgroundPosition:"center",
    backgroundSize: "cover",
  height: "100%",
  width: "100vw",
 
    backgroundRepeat: "no-repeat"
  }}>*/}
  <h2 style={{color:"white",fontSize:"30px",fontStyle:"sans-serif",marginTop:"50px",display:"flex", justifyContent: "center"}}>Events <span style={{color:"burlywood", fontSize:"30px"}}>Category</span></h2>

         <Box className="product-grid"  sx={{display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center", padding: 2,marginTop:"50px"}} >
        
      {/*  <Grid className="grid">


        <Card sx={{ minWidth: 275 }} style={{width:'230px',height:'150px',display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>*/}
      {/* <CardContent> */}

{/*backgroundColor:"darkblue"
        
        <h2 gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{textDecoration:'none',textAlign:'center',
            fontWeight:'bold',color:'white'}}>
          Sports
        </h2>
        */}
       
      {/* </CardContent> */}


      {category.map((item, index) => (
  <Card 
    key={index} 
    sx={{
      minHeight: '280px', 
      width: 320,
      display: "flex", 
      flexDirection: "column", // Added this to stack elements vertically
      position: "relative", // Allows overlay elements to be positioned inside
      overflow: "hidden",
      alignItems: "center", // Centers items horizontally
      justifyContent: "center" // Centers items vertically
    }}
  >
    <CardCover sx={{ width: '100%', height: '100%' }}>
      <img
        src={item.image ? `${host}/upload/${item.image}` : 'placeholder.jpg'}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensures image covers the area
      />
    </CardCover>
    <CardCover
      sx={{
        position: 'absolute', // Ensures gradient covers the image
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background:
          'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0)0px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100px)',
      }}
    />
    <CardContent 
      sx={{ 
        position: 'absolute', // Places content above image and gradient
        bottom: 0, 
        padding:2,
        justifyContent: 'flex-end', 
        fontSize: "40px",
        width: '100%', 
        textAlign: 'center' // Centers text horizontally
      }}
    >
      <Typography level="title-lg" textColor="#fff">
        {item.name}
      </Typography>
    </CardContent>
  </Card>
  ))}
  </Box>
  </div>
  )
}