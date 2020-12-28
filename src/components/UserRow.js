/** @format */

import React, { useState, useMemo } from "react";
import { TableRow, TableCell, Collapse } from "@material-ui/core";

export const UserRow = ({ user }) => {
  const [open, setOpen] = useState(false);

  const inventoryContent = useMemo(() => {
    let jsonInventory = [];
    try {
      jsonInventory = JSON.parse(user.sortedInventory);
    } catch (e) {
      console.log(e);
    }

    return !!jsonInventory.length
      ? jsonInventory.map(
          (item, index) =>
            item.label &&
            `${item.label},  `
        )
      : "No items in inventory";
  }, [user.sortedInventory]);

  return (
    <>
      <TableRow key={user.id} onClick={() => setOpen(!open)}>
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
      <TableRow key={`${user.id}-inventory`}>
        <TableCell  style={styles.collapsableCell} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableCell colSpan={6}>{inventoryContent}</TableCell>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const styles = { collapsableCell: { paddingBottom: 0, paddingTop: 0 } };
