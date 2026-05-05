import React, { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { Button, Menu, MenuItem } from '@mui/material';
import {Grid} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function ManageEvents() {
  const host ="http://127.0.0.1:8005"

const [events,SetEvents]=useState([]);
const[open,setopen]=useState(false);
const[anchorE1,setAnchorE1]=useState(null);
const [deleteStatus,setDeleteStatus]=useState(null);

useEffect(()=>{
  axios.get(`${host}/use1/getevent`)
  .then((res)=>{
    console.log(res.data)
    SetEvents(res.data);

  })
  .catch((err)=>{
    console.log(err);
  })
},[deleteStatus])


const handleDelete=(id)=>{
  console.log(`Delete user ID/${id}`);
  axios.delete(`${host}/use1/deleteevent/${id}`)
  .then((response)=>{
    console.log("Delete Response"+response.data.name);
    alert("deleted Successfully")
    console.log(response,"response");
    setDeleteStatus(response.data);
  })
}


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const handleMenuClick =(event,id)=>{
  setAnchorE1(event.currentTarget);
  setDeleteStatus(id);
};
const handleMenuClose =()=>{
  setAnchorE1(null);

}
const handleClickOpen =()=>{
  setopen(true);
}

  return (
    <div style={{background:"#2c3e50",overflow:"hidden"}}>
         <Box className="product-grid">
         <h2 style={{ color: "Purple", fontSize: "35px", fontStyle: "sans-serif" }}>
      Manage <span style={{ color: "burlywood", fontSize: "28px" }}>Events</span>
    </h2>

        <Link to= '/insrt'><Button variant="contained" color="success" style={{marginLeft:"950px",marginBottom:"10px"}}><AddIcon></AddIcon>

  Insert Event

</Button></Link>
<Grid container spacing ={2}>
{ events.map((item, index) => ( 
<Grid item xs={12} sm={6} md={3} key={item._id}>
<Card key={index} sx={{ maxWidth: 380 ,background:"aliceblue",height:"510px"}}>
      <CardHeader
       
        action={
          <>
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={(event)=> handleMenuClick(event,item._id)} />
          </IconButton>
         
       </>
        }
       style={{backgroundColor:"grey"}}
        title= {item.college_name}
        subheader={item.category_type}
      />
      <CardMedia
        component="img"
        height="270"
       image={item.image ? `${host}/upload/${item.image}`:'placeholder.jpg'}
       // alt={item.event_type}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'black' }}>
         {item.event_type}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
         {item.date}
        </Typography>

        <Typography variant="body2" sx={{ color: 'black' }}>
         {item.location}
        </Typography>

        <Typography variant="body2" sx={{ color: 'black' }}>
        {item.description}
        </Typography>

       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
    
    </Card>
    <Menu 
          anchorEl={anchorE1}
          open={Boolean(anchorE1)}
          onClose={handleMenuClose}
          >
            <MenuItem variant="contained" onClick={()=>handleDelete(deleteStatus)} style={{ backgroundColor:'black'}}>Delete</MenuItem>
            <Link to={`/Updatevnt/${deleteStatus}`}><MenuItem variant='contained' color='black'>Update</MenuItem></Link> 
       </Menu>
    </Grid>
))}
</Grid>
    </Box>
      
      
</div>
)
}