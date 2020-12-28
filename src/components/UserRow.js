import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Collapse,
} from "@material-ui/core";

export const UserRow = ({ user }) => {
  const [open, setOpen] = useState(false);

  let jsonInventory = [];
  try {
    jsonInventory = JSON.parse(user.sortedInventory);
  } catch (e) {
    console.log(e);
  }
  if (!jsonInventory) {
    return;
  }

  return (
    <>
      <TableRow  onClick={() => setOpen(!open)}>
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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableCell colSpan={6}>
              {!!jsonInventory.length
                ? jsonInventory.map((item, index) => item.label && `${item.label}${index !== jsonInventory.length -1 &&  ','} `)
                : "No items in inventory"}
            </TableCell>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
