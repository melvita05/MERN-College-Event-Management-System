import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function UserReportCard() {
  return (
    
     <div>
    <Card sx={{ maxWidth: 345 ,padding:10,marginTop:20,marginBottom:20,background:'#7E60BF'}}>
    <CardActionArea>
     {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"style={{padding:"50px",fontStyle:"oblique",fontSize:"50px",fontPalette:"dark"}}>
          UserReport
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to="/report">
      <Button variant="contained" size='mid'style={{display:"flex",marginLeft:"145px"}} >LOG IN</Button></Link>
    </CardActions>
  </Card>
    </div>
  )
}
