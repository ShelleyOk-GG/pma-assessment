import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import { InventoryCell } from './InventoryCell';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export const UserGrid = ({users}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Last Logged</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Job Grade</TableCell>
            <TableCell>Sorted Inventory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.firstname}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.lastname}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.last_logged}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.job}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.job_grade}
              </TableCell>
              <InventoryCell sortedInventory={user.sortedInventory}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
