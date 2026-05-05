import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateEvnt() {
  const { id } = useParams();
  const navigate = useNavigate();
  const host = "http://127.0.0.1:8005";

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);


  // Fetch categories
  useEffect(() => {
    axios.get(`${host}/use/getcat`)
      .then(res => {
        console.log("Categories fetched:", res.data);
        setCategory(res.data);
      })
      .catch(err => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  

  const eventTypes = [
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



  const [updatedata, setUpdateData] = useState({
    college_name:"",
    category_type:"",
    event_type:"",
    location:"",
    description:"",
    date: ""
  });

  


  // Fetch single event data for update
  useEffect(() => {
    axios.get(`${host}/use1/singlevent/${id}`)
      .then(res => {
        console.log("Fetched event data:", res.data);
        const data = res.data.data;
        setUpdateData({
          college_name: data.college_name || '',
          category_type: data.category_type || '',
          event_type: data.event_type || '',
          location: data.location || '',
          description: data.description || '',
          date: data.date || '',
        });
      })
      .catch(err => {
        console.error("Error fetching event data:", err);
      });
  }, [id]);

  // Handle changes to text fields
  const handleChange = (e) => {
    setUpdateData({ ...updatedata, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in updatedata) {
      formData.append(key, updatedata[key]);
    }

    if (image) {
      formData.append("image", image);
    }

    axios.put(`${host}/use1/updateevent/${id}`, formData)
    
      .then(res => {
        console.log("Data updated successfully:", res.data);
        alert("Event updated successfully!");
        navigate('/mevnt');
      })
      .catch((err) => {
        console.error('Error updating data:', err);
        alert("Error updating event. Please try again.");
      });
  };
  return(
    <div>
      <h1 style={{backgroundColor:"black",display:"flex",justifyContent:"center"}}>Update Event</h1>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div style={{border:"1px solid black",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div>
      <TextField
  style={{ width: "400px" }}
  id="outlined-select-currency"
  select
  label="Category"
  name="category_type"
  onChange={handleChange}
  value={updatedata?.category_type || ""}
>
  {category.map((category) => (
    <MenuItem style={{ color: "black" }} key={category._id} value={category.name}>
      {category.name}
    </MenuItem>
  ))}
</TextField>
<br></br>
        <TextField style={{width:"400px"}}
          id="outlined-select-currency"
          select
          label="event Types"
          name="event_type"
          onChange={handleChange}
        value={updatedata?.event_type || ""}
        >
          
          {eventTypes.map((category) => (
            <MenuItem  style={{color:"black"}}key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        
        </TextField>
        </div>
        <TextField style={{width:"400px"}}
          required
          id="outlined-required"
          label="Title"
         // defaultValue="Title"
          name='college_name'
          onChange={handleChange}
          value={updatedata?.college_name || ""}
        />
       <TextField  style={{width:"400px"}}
          required
          id="outlined-required"
         label="Upload image"
          type='file'
          name='image'
          onChange={handleImage}
        />
        <TextField  style={{width:"400px"}}
          id="outlined-required"
          label="Location"
          name='location'
          onChange={handleChange}
          value={updatedata?.location || ""}
        />
         <TextField 
  style={{ width: "400px" }}
  required
  id="outlined-required"
  label="Date"
  name="date"
  type="date" // Set the type to date
  InputLabelProps={{
    shrink: true,
  }}
  onChange={handleChange}
  value={updatedata?.date || ""}
/>
       
       
      <TextField  style={{width:"1100px"}}
          id="outlined-required"
          label="Description"
          name='description'
          multiline
          rows={4}
          onChange={handleChange}
          value={updatedata?.description || ""}
        />

<Button 
          variant="contained" 
          color="success" 
          onClick={handleSubmit} 
          style={{ marginBottom: "15px",marginTop:"30px", width: "500px" ,marginLeft:"600px",backgroundColor:"Black"}}
        >
          Submit
        </Button>
        </div>
     
     
     
  </Box>
      
</div>
      
    
     
    
  
    
  )
}
