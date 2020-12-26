/** @format */

import { TableCell } from "@material-ui/core";

export const InventoryCell = ({ sortedInventory }) => {
    console.log(sortedInventory)
  if (!sortedInventory) {
    return;
  }
  return (
    <TableCell component="th" scope="row">
      {/* {sortedInventory.map((item) => item.label)} */}
    </TableCell>
  );
};
