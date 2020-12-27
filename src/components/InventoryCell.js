import { TableCell } from "@material-ui/core";

export const InventoryCell = ({ sortedInventory }) => {
  let jsonInventory = []
  try {
    jsonInventory = JSON.parse(sortedInventory)
  } catch (e) { console.log(e) }
  if (!jsonInventory) {
    return;
  }
  return (
    <TableCell component="th" scope="row">
      {jsonInventory.map((item) => item.label && `${item.label} `)}
    </TableCell>
  );
};
