import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
const{id}=useParams();
const navigate = useNavigate();

const host = "http://127.0.0.1:8005";
const [image, setImage] = useState(null);

const[updatedata,SetUpdateData]=useState({
    name:"",
  
})

useEffect(()=>{
    axios.get(`${host}/use/singledata/${id}`)
    .then(res => {
    
        const data = res.data.data;
        SetUpdateData({
          name: data.name,
        });
      })
      .catch(err => console.log(err));
  }, [id]);


  const handleChange = (e) => {
    SetUpdateData({ ...updatedata, [e.target.name]: e.target.value });
  };

  // Handle image file selection
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
// Handle form submission


const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();

  // Append text fields to formData
  for (let key in updatedata) {
    formData.append(key, updatedata[key]);
  }

  // Append the image if it exists
  if (image) {
    formData.append("image", image);
  }

  // Send formData in the axios request
  axios.put(`${host}/use/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("Data updated successfully:", res.data);
      navigate("/cat");
    })
    .catch((err) => {
      console.error("Error updating data:", err);
    });
};
  return (
    <div>
      <Box className="form-container">
      <h1 style={{backgroundColor:"black",display:"flex",justifyContent:"center"}}>Update Category</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
        <form>
          <TextField
            label="Name"
            name="name"
            onChange={handleChange}
            value={updatedata.name}
            required
            midiumWidth
            margin="normal"
            style={{width:"600px"}}
          />
        <br></br>
        <TextField
          style={{ width: "250px" }}
          label="Upload image"
          type="file"
          name="image"
          onChange={handleImage}
        />

         <br/><br/>
          <Button type="submit" variant="contained" onClick={handleSubmit}  color="primary" midiumWidth style={{ marginBottom: "15px",marginTop:"30px", width: "500px" ,marginLeft:"60px",backgroundColor:"Black"}}>

            Submit
          </Button>
        </form>
        </div>

      </Box>
    </div>
  )
}
