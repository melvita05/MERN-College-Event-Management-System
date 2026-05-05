import React from 'react'
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
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

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


export default function Feedback() {
  return (
    <div>
         <Box className="product-grid">
         <h2 style={{color:"Purple",fontSize:"30px",fontStyle:"sans-serif"}}>Manage <span style={{color:"burlywood",fontSize:"20px"}}>FeedbacK</span></h2>
        
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SI/No</StyledTableCell>
            <StyledTableCell align="right"style={{paddingRight:"100px"}}>UserDetails</StyledTableCell>
            <StyledTableCell align="right"style={{paddingRight:"100px"}}>Title</StyledTableCell>
            <StyledTableCell align="right"style={{paddingRight:"100px"}}>Feedback</StyledTableCell>
            <StyledTableCell align="right"style={{paddingRight:"100px"}}>Rating</StyledTableCell>
            <StyledTableCell align="right"style={{paddingRight:"100px"}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right" > </StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
         

              <StyledTableCell align="right">
              <Button>
                  <FontAwesomeIcon icon={faPenToSquare} style={{background:"black"}} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faTrash} style={{background:"black"}}/>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
      
</div>
  )
}