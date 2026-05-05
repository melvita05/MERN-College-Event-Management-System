import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
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

export default function Manageuser() {
  const host = "http://127.0.0.1:8005";

  const [deleteStatus, setDeleteStatus] = useState(null);
  const [user, SetUser] = useState([]); // Initialize as an array

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('UserToken'));
    axios
      .get(`${host}/users/view`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data, "get data");
        SetUser(res.data); // Ensure res.data is an array
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleteStatus]);

  const handleDelete = (id) => {
    console.log(`Delete user ID/${id}`);
    axios
      .delete(`${host}/users/delete/${id}`)
      .then((response) => {
        console.log("Delete Response" + response.data.name);
        alert("Deleted Successfully");
        setDeleteStatus(response.data);
      });
  };

  return (
    <div style={{ background: "#2c3e50", overflow: "hidden" }}>
      <Box className="product-grid">
        <h2 style={{ color: "Purple", fontSize: "35px", fontStyle: "sans-serif" }}>
          View <span style={{ color: "burlywood", fontSize: "28px" }}>User</span>
        </h2>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SI/No</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phone</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center"><b style={{ color: "black" }}>Name:</b>{item.name}</StyledTableCell>
                  <StyledTableCell align="center"><b style={{ color: "black" }}>Email:</b>{item.email}</StyledTableCell>
                  <StyledTableCell align="center"><b style={{ color: "black" }}>Phone:</b>{item.phone}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={() => handleDelete(item._id)}>
                      <FontAwesomeIcon icon={faTrash} style={{ backgroundColor: "black" }} />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
