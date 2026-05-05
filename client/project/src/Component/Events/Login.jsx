import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function Login() {


  
  const[userdata,setUserdata]=useState({})

  const handleChange=(e)=>{
setUserdata({...userdata,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
      e.preventDefault(); // Prevent default form submission behavior if this function is tried to a form submission
      {e=="Join" ? alert(" you have successfully joined the event"): alert(" you have successfully joined the event")}
  }

  {/* const click =(value)=>{
        {value=="Join" ? alert(" you have successfully joined the event"): alert(" you have successfully joined the event")}
       }*/}
  return (
    <div style={{display:"flex",justifyContent:"center"}}>

    <Box style={{border:"1px solid black",height:"450px",width:"500px",paddingTop:"100px",paddingLeft:"200px",marginTop:"25px",background:"linear-gradient(180deg,#eea7f3,#c0f5d022 60%)"}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <div>
        <h2 style={{marginLeft:"100px"}}>Events Registration</h2>
    <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label=" Name*"
          name="name"
       onChange={handleChange}
        />
        <br/>
        <TextField style={{width:"300px"}}
          id="outlined-textarea"
          label="Email*"
          name="email"
          onChange={handleChange}
        />
         <TextField style={{width:"300px"}}
          id="outlined--password-input"
          label="Password*"
           type="password"
           onChange={handleChange}
        />
     
    
        <br/><br/>
      {/*  <Button type="submit"  variant="contained" style={{width:"250px"}}>
    
  Submit
</Button>*/}
<button  variant="" onClick={()=>handleSubmit("Join")} style={{width:"100px",height:"50px",background:"green",marginLeft:"115px"}}>JOIN</button>
    </div>
    </Box>
    </div>
  )
}
