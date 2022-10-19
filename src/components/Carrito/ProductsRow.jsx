import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { IoCreateOutline, IoTrashOutline} from "react-icons/io5";

const ProductsRow = ({ carrito, setCarrito, id, product, price, amount, subTotal }) => {

  const handleDelete = () =>{
    const result = carrito.filter(item=>item.id!==id);
    setCarrito(result);
  };

  return (<>
    <TableRow>
      <TableCell>
        <Typography variant="subtitle1">{ product }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ price }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ amount }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ subTotal }</Typography>
      </TableCell>
      <TableCell>
        <IconButton>
          <IoCreateOutline />
        </IconButton>
        <IconButton onClick={ handleDelete }>
          <IoTrashOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  </>)
};

export default ProductsRow;