import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const TableProducts = ({ children }) => {
  return (<>
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" fontWeight={ 700 }>Product</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" fontWeight={ 700 }>Price</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" fontWeight={ 700 }>Amount</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" fontWeight={ 700 }>SubTotal</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" fontWeight={ 700 }>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { children }
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TableProducts;