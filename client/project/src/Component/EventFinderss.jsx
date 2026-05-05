import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link,useNavigate } from 'react-router-dom';
import IMG2 from '../Assets/bd.jpeg'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import axios from 'axios';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EventIcon from '@mui/icons-material/Event';
import Swipers from "./Swipers"

export default function Allproduct() {
  const host ="http://127.0.0.1:8005"
  const nav = useNavigate();
  
useEffect(()=>{
  if(localStorage.getItem('UserToken') === null){
    nav('/log');
  }
},[nav]);

  const[search,setSearch]= useState([]);
  const [events,SetEvents]=useState([]);

  useEffect(()=>{
    axios.get(`${host}/use1/getevent`)
    .then((res)=>{
      console.log(res.data)
      SetEvents(res.data);
  
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  
  
  
   
const handleChange=(e)=>{
  console.log(e.target.value,"search")
  setSearch((e.target.value).toLowerCase())}

 {/* const events=[
    { id: 1,
     title: 'College Tech Fest',
      date: '2024-10-12',
       description: 'A technical fest for college students.',
        location: 'New York', collegeName: 'NYU',
        imgs: "https://www.csusb.edu/sites/default/files/upload/image/2019%20Tech%20Fest%20Post2.JPG"
    },
    { id: 2, 
        title: 'Coding Hackathon', 
        date: '2024-11-05', 
        description: 'A 24-hour coding competition.',
         location: 'San Francisco',
          collegeName: 'Stanford',
          imgs: "https://tse4.mm.bing.net/th?id=OIP.FUn8x1PoOZ5LbK3DLgegVAHaEJ&pid=Api&P=0&h=180"
        },
    { id: 3, 
        title: 'AI & Robotics Workshop', 
        date: '2024-12-10',
         description: 'A workshop on AI and robotics.',
          location: 'Los Angeles',
           collegeName: 'UCLA' ,
           imgs:" https://tse4.mm.bing.net/th?id=OIP.dl43nqR8XC3b0o8z_D1WBwHaDw&pid=Api&P=0&h=180"
        },
    { id: 4, 
        title: 'Cultural Fest',
         date: '2024-09-15', 
         description: 'Annual cultural fest with music, dance, and art.',
          location: 'Boston',
           collegeName: 'MIT',
        imgs: "https://tse3.mm.bing.net/th?id=OIP.-KXViVE5NLawHueZpS-6cwHaES&pid=Api&P=0&h=180" }
];
*/}


  return (
    <div style={{backgroundImage:`url(${IMG2})`,backgroundPosition:"center",
    backgroundSize: "cover",
  height: "100%",
  width: "100vw",
  margin:0,
  overflow:"hidden",
    backgroundRepeat: "no-repeat"}}>
      <Swipers/>
          <Grid container spacing={2} style={{marginTop:"20px",justifyContent:"center"}}>
            <Box sx={{ p: 10,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20"}}>
            <TextField onChange={handleChange} label="Search Events here" InputProps={{style:{fontSize:40}}}/>
            </Box>
        {events?.filter((value)=>value.category_type?.toLowerCase()?.includes(search))?.map((item,index)=>{
       
            return(

                
            
          
          
              

              <Card 
        
              key={index}
              title={item.college_name}
                subheader={item.category_type}
              sx={{ maxWidth: 345 , flex:"1 0 30%",
            boxSizing:"border-box",
            maxWidth:"400px",
            margin:"50px"}}>
      
       <CardMedia
          sx={{ height: 300 }}
          
          image={item.image ? `${host}/upload/${item.image}` : 'placeholder.jpg'}
          
        />
      <CardContent>
      <Typography  variant="body2" sx={{ color: 'text.secondary', fontFamily:"fantasy",fontStyle:"bold",color:"black",fontSize:"26px"}}>{item.college_name}
         
         </Typography>
        <Typography  variant="body2" sx={{ color:'Highlight' ,fontFamily:"initial",fontSize:"23px",fontStyle:"bold",fontWeight:"60px"}}><EventIcon style={{backgroundColor:"black"}}/>{item.category_type}</Typography>
        <Typography  variant="body2" sx={{ color: "crimson" ,fontFamily:"initial",fontSize:"20px"}}>{item.event_type}</Typography>


        <Typography  variant="body2" sx={{ color: 'Highlight' ,fontFamily:"initial",fontSize:"20px"}}><AddLocationIcon style={{background:"black"}}/>  {item.location}
        </Typography>
         
        <Typography  variant="body2" sx={{ color: 'crimson' ,fontFamily:"initial",fontSize:"20px"}}><DateRangeIcon style={{background:"black"}}/>  {item.date}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'black' ,fontFamily:"initial",fontSize:"17px"}}>{item.description}
         
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link to='/apply'>
      <Button size="small">Apply Now</Button></Link>
      </CardActions>
    </Card>
    
)})

}

</Grid>
      
    </div>
  )
}