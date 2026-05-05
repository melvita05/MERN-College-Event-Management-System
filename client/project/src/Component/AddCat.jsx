import React,{useState} from 'react'
import { MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import { Box } from '@mui/material';
import {Button} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import axios from 'axios'
import TextField from '@mui/material/TextField';

export default function AddCat() {
  const host = "http://127.0.0.1:8005";
  const [image,setImage]=useState('')
  const [catData, setCatData] = useState({ 
    name: "" });

  const handleChange = (e) => {
    setCatData({
      ...catData,
      [e.target.name]: e.target.value
    });
  };



  const handleImage =(e) =>{
    setImage( e.target.files[0]);//use files[0] to get the updated file
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = new FormData();
    Data.append('name',catData.name);
    Data.append('email',catData.email);
    Data.append('phone',catData.phone);
    Data.append('image',image);


     await axios.post(`${host}/use/catinsert`,Data)
     .then((res)=>{
      if (res.data) {
        alert("Inserted Successfully");
      } else {
        alert("Some error occurred");
      }
    })
    . catch ((error) =>{
      console.error(error);
      alert('Error submitting form');
    }	)
	

  };
  return (
    <div>
      <Box style={{padding:"20px",border:"1px solid black " ,height:"500px",width:"100%",display:"flex",background: "linear-gradient(180deg,#eea7f3,#c0f5d022 60%)"}}>
      
        <h3 style={{marginTop:"40px",marginLeft:"200px" ,color:"green"}}>INSERT<span style={{color:"red",fontSize:"19px"}}>EVENTS CATEGORY</span></h3>
       <Link  to="/cat"><Button variant='text'      onChange={handleChange}  style={{marginLeft:"910%",marginTop:"140px",fontSize:"15px",}}><ArrowForwardIosIcon style={{background:"black"}}/>View </Button></Link>
       <Box>
      <MDBInput  wrapperClass='mb-4' 
          name='name' 
          placeholder='Category List' 
          id='formControlLg' 
          type='text' 
          size="lg" 
          onChange={handleChange} style={{padding:"10px, 10px,10px,10px",marginTop:"200px",border:"1px solid black"}}/>
     <TextField  style={{width:"250px"}}
          required
          id="outlined-required"
         label="Upload image"
          type='file'
          name='image'
          onChange={handleImage}
        />



      <Button variant="contained" color="success" onClick={handleSubmit} style={{marginBottom:"15px",width:"100px",marginLeft:"640px"}}>Submit</Button>
      </Box>
      </Box>
  </div>
  )
}
{/*<h3 style={{marginTop:"20px",marginBottom:"20px"}}>Insert Manage Category</h3>
     <Link to="/cat"><Button variant="text" style={{marginLeft:"50%"}}><ArrowForwardIosIcon></ArrowForwardIosIcon>view Cart</Button></Link> 
      <Box>
      <MDBInput wrapperClass='mb-4'  name='Category List' placeholder='Category List' id='formControlLg' type='email' size="lg" style={{width:"500px",marginLeft:"350px"}}/>
      <Button variant="contained" color="success" style={{marginBottom:"15px",width:"100px"}}>Login</Button>
      </Box>*/}