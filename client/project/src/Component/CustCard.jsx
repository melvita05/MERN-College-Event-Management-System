import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import FeedbackCard from './FeedbackCard';
export default function CustCard() {
  return (
    <div>
       <Card sx={{ maxWidth: 345,padding:10,marginTop:20,marginBottom:20,background:'#7E60BF'}}>
      <CardActionArea>
       {/*<CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />*/}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{padding:"50px",fontStyle:"oblique",fontSize:"50px",fontPalette:"dark"}}>
            EVENT MANAGE
          </Typography>
          <Typography variant="body2" sx={{ color: 'orange' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/manage">
        <Button variant="contained" size='mid'style={{display:"flex",marginLeft:"145px"}} >LOG IN</Button></Link>
      </CardActions>
    </Card>
    </div>
  )
}
