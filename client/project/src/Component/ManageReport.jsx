import React, { useState,useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { Button, patch } from '@mui/material';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(1, 159, 6.0, 24, 4.0),
    createData(2, 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  export default function ManageReport() {
    const host = "http://127.0.0.1:8005";
  
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
  const[deleteStatus,setDeleteStatus]=useState();
    useEffect(() => {
      let token = JSON.parse(localStorage.getItem("UserToken"));
      axios
        .get(`${host}/users/view`, { headers: { "auth-token": token } })
        .then((res) => {
          console.log(res.data, "get users");
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    useEffect(() => {
      let token = JSON.parse(localStorage.getItem("UserToken"));
      axios
        .get(`${host}/use1/getevent`, { headers: { "auth-token": token } })
        .then((res) => {
          console.log(res.data, "get events");
          setEvents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
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
    return (
      
     
  <div style={{background:"#2c3e50",overflow:"hidden"}}>
  <Box className="product-grid">
    <h2 style={{ color: "Purple", fontSize: "35px", fontStyle: "sans-serif" }}>
      Manage <span style={{ color: "burlywood", fontSize: "28px" }}>Report</span>
    </h2>

    <TableContainer component={Paper} style={{width:"60%" ,marginLeft:"300px"}}>
      <Table sx={{ minWidth: 500 ,width:"100%",marginLeft:"20pxpx"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SI/No</StyledTableCell>
            <StyledTableCell align="center" >
              User Details
            </StyledTableCell>
            <StyledTableCell align="center" >
            Event Details
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, userIndex) => {
            // Get all events for the user
            const userEvents = events.filter((event) => event.userid ===user.id);

            return (
              <StyledTableRow key={userIndex}>
                {/* Serial Number */}
                <StyledTableCell component="th" scope="row">
                  {userIndex + 1}
                </StyledTableCell>

                {/* User Details */}
                <StyledTableCell align="center" >
                  <b style={{ color: "black" }}>Name:</b> {user.name}
                  <br />
                  <b style={{ color: "black" }}>Email:</b> {user.email}
                  <br />
                  <b style={{ color: "black" }}>Phone:</b> {user.phone}
                </StyledTableCell>

                {/* Event Details (One column per event) */}
              <div style={{display:"flex",flexDirection:"column" ,justifyContent:"center"}}>
                {  userEvents.map((event, eventIndex) => (
                  <>
                   {/* <StyledTableCell align="center"style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                  <img
                    src={event.image ? `${host}/upload/${event.image}` : 'placeholder.jpg'}
                    alt="User"
                    style={{ width: "150px", height: "150px", borderRadius: "70%",display:"flex",flexDirection:"column"}}
                  />
                */}
                
             
                <StyledTableCell
  key={eventIndex}
  align="center"
  style={{
    display: "flex",
     // Space between the content and the button
    alignItems: "center", // Center align items vertically
    // padding: "10px 20px", // Add padding for better spacing
    // marginRight:"100px"
    gap:"30px"
  }}
>
  {/* Left Content - Event Details */}
  <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
    <img
      src={event.image ? `${host}/upload/${event.image}` : "placeholder.jpg"}
      alt="Event"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "10%", // Circular image
        objectFit: "cover",
      }}
    />
    <div style={{ textAlign: "left", lineHeight: "1.9",  }}>
      {/* <div style={{color:"black"}}>
        <b style={{ color: "black" }}>College:</b> {event.college_name}
      </div> */}
      <div style={{color:"black"}}>
        <b style={{ color: "black" }}>Evnt_Category:</b> {event.category_type}
      </div>
      <div style={{color:"black"}}>
        <b style={{ color: "black" }}>Evnt_Name:</b> {event.event_type}
      </div>
      {/* <div style={{color:"black"}}>
        <b style={{ color: "black" }}>Date:</b> {event.date}
      </div>
      <div style={{color:"black"}}>
        <b style={{ color: "black" }}>Location:</b> {event.location}
      </div> */}
    </div>
  </div>

  {/* Right Content - Report Button */}
  <Button
    style={{
      backgroundColor: "white",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px", // Space between text and icon
      border: "1px solid black", // Optional styling
      padding: "5px 10px", // Button padding
      
    }}
    onClick={() => handleDelete(event._id)}
  >
    Report
    <FontAwesomeIcon icon={faTrash} style={{ backgroundColor: "black" }} />
  </Button>
</StyledTableCell>


                  </>
                    ))}
                    </div>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</div>
)
}