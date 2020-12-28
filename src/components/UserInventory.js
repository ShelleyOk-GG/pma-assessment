import { TableCell } from "@material-ui/core";

export const UserInventory = ({ sortedInventory }) => {
  let jsonInventory = []
  try {
    jsonInventory = JSON.parse(sortedInventory)
  } catch (e) { console.log(e) }
  if (!jsonInventory) {
    return;
  }

  return (
    // <TableCell style={{maxWidth: '.1vw'}} colSpan={1} component="th" scope="row">
      <>{jsonInventory.map((item) => item.label && `${item.label} `)}</>
    // </TableCell>
  );
};
