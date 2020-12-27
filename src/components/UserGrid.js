/** @format */

import React, { useState, useCallback } from "react";
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
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ROW_HEIGHT = 53;

export const UserGrid = ({ users }) => {
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPageUsers, setCurrentPageUsers] = useState(
    users.slice(0, rowsPerPage)
  );
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
    setCurrentPageUsers(
      users.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
    );
  }, [rowsPerPage, users]);

  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setCurrentPageUsers(users.slice(0, event.target.value));
  }, [users]);

  const emptyRows = rowsPerPage - currentPageUsers.length;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="PMA User Table">
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
            <TableRow style={{ height: ROW_HEIGHT }} key={user.id}>
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
              {/* <InventoryCell sortedInventory={user.sortedInventory} /> */}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: ROW_HEIGHT * emptyRows }}>
              <TableCell />
            </TableRow>
          )}
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={6}
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

  const handleBackButtonClick = () => {
    onChangePage(page - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(page + 1);
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
