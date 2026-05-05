import React from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import vd from "../Assets/ve1.mp4"

export default function Swipers() {
  return (
    <div style={{background:"#2c3e50",overflow:"hidden"}} >


    
        <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
     
    
    
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 ,height:"700px"}}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            
          >
            <source
              src={vd}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
         <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mt: { xs: 70, display:"flex",justifyContent:"center",marginTop:"1800px" } }}
          >
            
             <h2 style={{fontSize:"40px",display:"flex",justifyContent:"center",color:"white",fontFamily:"fantasy",gap:"15px"}}>ITS  TIME TO CELEBRATE THE <span style={{color:"blueviolet",fontSize:"40px",direction:"revert",fontFamily:"fantasy"}}><br></br> BEST EVENTS</span></h2>   
          </Typography>
        </CardContent>
      </Card>
      </Box>
      </div>
  )
}
