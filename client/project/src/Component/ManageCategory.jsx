import React,{useState,useEffect} from 'react';
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
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import {Box} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
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



export default function ManageCategory() {

  const host= "http://127.0.0.1:8005";

  //  initialize user state as an empty array to prevent map errors
    const [category, setCategory] = useState([]);
   const[deleteStatus,setDeleteStatus]=useState();
  
    useEffect(()=>{
      axios.get(`${host}/use/getcat`)
      .then((res)=>{
        
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[deleteStatus]);

    const handleDelete=(id)=>{
      console.log(`Delete user ID/${id}`);
      axios.delete(`${host}/use/delete/${id}`)
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
    <h2 style={{color:"Purple",fontSize:"35px",fontStyle:"sans-serif"}}>Manage <span style={{color:"burlywood",fontSize:"28px"}}>Category</span></h2>
     <Link to="/add"> <Button variant="contained" color="success" style={{marginLeft:"90%",marginBottom:"15px"}}><AddIcon></AddIcon>
  Add category
</Button></Link>  
  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SI/No</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>

              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {category.length > 0? (
            category.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index+ 1}
                </StyledTableCell>
                <StyledTableCell align="center"> {row.name}</StyledTableCell>

                <StyledTableCell align="center">

                {row.image ?(
                  <img
        src={row.image ? `${host}/upload/${row?.image}` : 'placeholder.jpg'}
  
                  alt={row.name}
                  style={{width:"50px", height:"50px",borderRadius:"5px"}}
                  //Adjust styles as needed
                  />
                ):(
                  'No image'
                )}
                </StyledTableCell>

                <Link to={`/update/${row._id}`}> <Button >
                    <FontAwesomeIcon icon={faPenToSquare} style={
                      {background:"black"}
                    } />
                  </Button></Link>
                  <Button onClick={()=>handleDelete(row._id)}>
                    <FontAwesomeIcon icon={faTrash} style={
                      {background:"black"}
                    } />
                  </Button>
                
              </StyledTableRow>
            ))
) :(
  <TableRow>
    <TableCell colSpan={5} align='center'>No data available</TableCell>
  </TableRow>
  )}
          
            
         
                   
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </div>
  );
}