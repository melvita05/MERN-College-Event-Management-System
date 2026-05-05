import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function FeedForm() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

    <Box style={{border:"1px solid black",borderStyle:"double",height:"550px",width:"600px",paddingTop:"100px",paddingLeft:"200px",marginTop:"25px",background:"linear-gradient(180deg,#eea7f3,#c0f5d022 60%)"}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
   <div>
        <h2 style={{marginLeft:"100px"}}>FEEDBACK</h2>
      
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
          id="outlined-textarea"
          label="Subject*"
           type="subject"
         
        />
      <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Message*"
          name="message"
         
         multiline
         rows={4}
        />
    </div>
        <br/><br/>
        <Button type="submit"  variant="contained" style={{width:"100px",marginLeft:"115px"}}>
    
  Submit
</Button>
</Box>
    </div>
    
    
  )
}