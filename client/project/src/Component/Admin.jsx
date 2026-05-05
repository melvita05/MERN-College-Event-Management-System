import React,{useEffect,useState} from 'react'
import FeedbackCard from './FeedbackCard'
import UserReportCard from './UserReportCard'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link,useNavigate } from 'react-router-dom'
import "../Css/Cat.css"
import "../Css/Home.css"
import Carousel from './Carousel'
import axios from 'axios'
import Groups3Icon from '@mui/icons-material/Groups3';
import InterestsIcon from '@mui/icons-material/Interests';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function Admin() {
  const host ="http://127.0.0.1:8005";
const [count,setCount]= useState([]);
  const nav = useNavigate();
  
useEffect(()=>{
  if(localStorage.getItem('UserToken') === null){
    nav('/log');
  }
},[nav]);

useEffect(()=>{
  axios.get(`${host}/overall/getover`)
  .then((res)=>{
    console.log(res,"data");
   
    setCount(res.data);
})
.catch((err)=>{
    console.log(err);
})
},[]);

console.log(count,"count...")


  return (
    <div style={{background:"#2c3e50",overflow:"hidden"}}>
        {/* <Box sx={{display:"flex",justifyContent:"center",gap:"10px"}}> */}
      
      {/* <FeedbackCard/> */}
      {/* <UserReportCard/> */}
      <div className='home-container'>
        <main className='main-content'>
            <div className='carousel-with-text'>

<Carousel/>
<h1>College Event Mangement System</h1>
            </div>
        </main><br></br>   
</div>
      <Box className="product-grid">
        <h2 style={{color:"purple",fontSize:"40px",fontStyle:"sans-serif",marginBottom:"180px",}}>Admin<span style={{color:"burlywood", fontSize:"36px"}}>Dashboard</span></h2>
        <Grid className="grid">


        <Card sx={{ minWidth: 275 }} style={{width:'230px',height:'190px',backgroundColor:"darkblue",display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>
      <CardContent>
      <Link to="/cat"> <h2 gutterBottom sx={{ color: 'text.secondary', fontSize: 20}} style={{textDecoration:'none',textAlign:'center',
            fontWeight:'bold',color:'white'}}>
          Manage Category
        </h2></Link>
       
      </CardContent>

      </Card>

      <Card sx={{ minWidth: 275 }} style={{width:'230px',height:'190px',backgroundColor:"darkblue",display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>
      <CardContent>
      <Link to="/mevnt"> <h2 gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }} style={{textDecoration:'none',textAlign:'center',
            fontWeight:'bold',color:'white'}}>
          Manage Events
          <p style={{textAlign:"center",fontWeight:"bold",color:"white",fontSize:"30px"}}><InterestsIcon style={{fontSize:"30px"}}/>={count.event}</p>
        </h2></Link>
       
      </CardContent>
      
    </Card>
   
    <Card sx={{ minWidth: 275 }} style={{width:'230px',height:'190px',backgroundColor:"darkblue",display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>
    <CardContent>
      <Link to="/muser"> <h2 gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }} style={{textDecoration:'none',textAlign:'center',
            fontWeight:'bold',color:'white'}}>
          View User
          <br></br>
          <p style={{textAlign:"center",fontWeight:"bold",color:"white",fontSize:"30px"}}><Groups3Icon style={{fontSize:"40px"}} />={count.user}</p>
        </h2></Link>
       
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 275 }} style={{width:'230px',height:'190px',backgroundColor:"darkblue",display:'flex',flexDirection:'column',
            justifyContent:'center',alignItems:'center'
        }}>
    <CardContent>
      <Link to="/mreport"> <h2 gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }} style={{textDecoration:'none',textAlign:'center',
            fontWeight:'bold',color:'white'}}>
          Manage Report
        </h2></Link>
       
      </CardContent>
      
    </Card>
        </Grid>
      </Box>

    </div>
  )
}
