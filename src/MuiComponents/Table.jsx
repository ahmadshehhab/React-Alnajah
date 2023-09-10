import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


export default function BasicTable(props) {
  
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow className='th'>
            <TableCell align='center' className='th1'>Doctor Name</TableCell>
            <TableCell align="center">Doctor Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((e) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell align="center">{e.name}</TableCell>
              <TableCell align="center">{e.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
