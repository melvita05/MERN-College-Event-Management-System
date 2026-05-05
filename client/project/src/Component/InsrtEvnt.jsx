import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

export default function InsrtEvnt() {

const host ="http://127.0.0.1:8005";
const [image,setImage]=useState('');

const[Cat,setCat] = useState([]);

useEffect(()=>{
  axios.get(`${host}/use/getcat`)
  .then((res)=>{
    
    console.log(res.data);
    setCat(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
},[]);

const[evntdata,SetEvntData]=useState({
    
    college_name:'',
    category_type:'',
    event_type:'',
    location:'',
    description:'',
   date:''
      })
      const handleChange=(e)=>{
        SetEvntData({
          ...evntdata,[e.target.name]:e.target.value
        });
      }
      
      
      const handleImage =(e) =>{
        setImage({...image,[e.target.name]: e.target.files[0]});//use files[0] to get the updated file
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Convert date to a standard format (e.g., "YYYY-MM-DD")
        const formattedDate = new Date(evntdata.date).toISOString().split("T")[0];
        
        // Check if formatted date is correct
        console.log("Formatted Date:", formattedDate);
      
        const Data = new FormData();
        Data.append("college_name", evntdata.college_name);
        Data.append("category_type", evntdata.category_type);
        Data.append("image", image.image);
        Data.append("date", formattedDate); // Use formatted date here
        Data.append("event_type", evntdata.event_type);
        Data.append("location", evntdata.location);
        Data.append("description", evntdata.description);
      
        await axios
          .post(`${host}/use1/eventinsert`, Data)
          .then((res) => {
            if (res.data) {
              alert("Inserted Successfully");
            } else {
              alert("Some error occurred");
            }
          })
          .catch((error) => {
            console.log("Some error occurred:", error);
            alert("Error Submitting form");
          });
      };
    console.log(image)
      
        const eventNames = [
          "Technical Quiz",
          "Group coding Contest",
          "Singing:Solo|Duo|Group",
          "Dance:Solo|Duo|Group",
          "Poetry Writing",
          "Wall Art",
          "Free Fire", 
          "PUBG",
          "Face Painting",
          "Mehendi",
          "Manchan-Skit",
          "Rupak-Air Crash",
          "Jhankar-Band Performance",
          "Saaz-Hindi Vocal Solo",
          "Dhanak-Poster Making",
          "Aks-Photography",
          "Volley Ball",
          "kabbadi",
          "Treasure Hunt ",
        ];
    

  return (
    <div>
     <Box style={{paddingLeft:"320px",background: "linear-gradient(180deg,#eea7f3,#c0f5d022 60%)",overflow:"hidden"}}>
<h3 style={{marginTop:"40px",marginLeft:"80px" ,color:"green"}}>EVENT<span style={{color:"red",fontSize:"19px"}}>DETAILS</span></h3>
         <Link to='/mevnt'><Button variant="contained" style={{marginLeft:"1000px",marginTop:"10px"}}><AddIcon style={{background:"black"}}></AddIcon>

  View Events

</Button></Link>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
      <div>
      <TextField
  style={{ width: "680px" }}
  id="outlined-select-currency"
  select
  label="Evnt_Category"
  name="category_type"
  onChange={handleChange}
>
  {Cat.map((category) => (
    <MenuItem style={{ color: "black" }} key={category._id} value={category.name}>
      {category.name}
    </MenuItem>
  ))}
</TextField>
        <TextField style={{width:"400px"}}
          id="outlined-select-currency"
          select
          label="Evnt_Names"
          name="event_type"
          onChange={handleChange}
       //  value={DishDetails.meal_type || ""}
        >
          
          {eventNames.map((category) => (
            <MenuItem  style={{color:"black"}}key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        
        </TextField>
        </div>
        <TextField style={{width:"300px"}}
          required
          id="outlined-required"
          label="Title"
         // defaultValue="Title"
          name='college_name'
          onChange={handleChange}

        />
       <TextField  style={{width:"250px"}}
          required
          id="outlined-required"
         label="Upload image"
          type='file'
          name='image'
          onChange={handleImage}
        />
        <TextField  style={{width:"250px"}}
          id="outlined-required"
          label="Location"
          name='location'
          onChange={handleChange}
          autoComplete="current-password"
        />
         <TextField 
  style={{ width: "300px" }}
  required
  id="outlined-required"
  label="Date"
  name="date"
  type="date" // Set the type to date
  InputLabelProps={{
    shrink: true,
  }}
  onChange={handleChange}
/>
       
       
      <TextField  style={{width:"1100px"}}
          id="outlined-required"
          label="Description"
          name='description'
          multiline
          rows={4}
          onChange={handleChange}
        />
<br></br>
<Button 
          variant="contained" 
          color="success" 
          onClick={handleSubmit} 
          style={{ marginBottom: "15px", width: "100px", marginLeft:"500px"}}
        >
          Submit
        </Button>

      </div>
     
     
  </Box>
      </Box>
</div>
      
    
     
    
  
    
  )
}
