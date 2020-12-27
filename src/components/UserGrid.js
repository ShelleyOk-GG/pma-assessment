/** @format */

import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
} from "@material-ui/core";
import { InventoryCell } from "./InventoryCell";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const UserGrid = ({ users }) => {
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPageUsers, setCurrentPageUsers] = useState(
    users.slice(0, rowsPerPage)
  );
  const [page, setPage] = useState(0);

  console.log(currentPageUsers.length);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setCurrentPageUsers(
      users.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
    );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage- currentPageUsers.length

  console.log("***", rowsPerPage- currentPageUsers.length)

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
          {currentPageUsers.map((user) => (
            <TableRow key={Math.random()}>
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
              <InventoryCell sortedInventory={user.sortedInventory} />
            </TableRow>
          ))}
          {emptyRows> 0 && (
            <TableRow
              style={{ height: 53 * emptyRows}}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TablePaginationActions = ({ count, page, rowsPerPage, onChangePage }) => {
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </>
  );
};
