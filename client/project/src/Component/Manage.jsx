import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function Manage() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

    <Box style={{border:"1px solid black",height:"450px",width:"600px",paddingTop:"100px",marginTop:"25px",background:"linear-gradient(180deg,#eea7f3,#c0f5d022 60%)"}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <div>
        <h2>Event Manage</h2>
    <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label=" Name*"
          name="name"
       
        />
        <br/>
        <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Email*"
          name="email"
        
        />
         <TextField style={{width:"300px"}}
          id="outlined--password-input"
          label="Password*"
           type="password"
         
        />
     
    
        <br/><br/>
        <Button type="submit"  variant="contained" style={{width:"250px"}}>
    
  Submit
</Button>
    </div>
    </Box>
    </div>
  )
}