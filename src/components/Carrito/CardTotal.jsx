import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const CardTotal = ({ date, customer, total }) => {
  return (<>
    <Paper style={{ width:"80%" }}>
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> DATE: </TableCell>
              <TableCell> Customer: </TableCell>
              <TableCell> Total: </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{ date }</TableCell>
              <TableCell>{ customer }</TableCell>
              <TableCell>$ { total }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </>)
};

export default CardTotal;