import { Container, Stack } from "@mui/system";
import { Fragment, useState } from "react";
import CardTotal from "../components/Carrito/CardTotal";
import Formulario from "../components/Carrito/Formulario";
import ProductsRow from "../components/Carrito/ProductsRow";
import TableProducts from "../components/Carrito/TableProducts";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState(0);

  return (<>
    <Container style={{margin:"2rem 0"}}>
      <Stack spacing={ 4 }>
        <Formulario 
          carrito={ carrito }
          setCarrito={ setCarrito }
          setDate={ setDate }
          setCustomer={ setCustomer }
          setTotal={ setTotal }
        />
        {carrito.length >=1 &&
          <Fragment>
            <CardTotal 
              date={ date }
              customer={ customer }
              total={ total }
            />
            <TableProducts>
              {  carrito.map(item=>(
                <ProductsRow 
                  key={ item.id }
                  id={ item.id }
                  product={ item.product }
                  price={ item.price }
                  amount={ item.amount }
                  subTotal={ item.subTotal }
                  carrito={ carrito }
                  setCarrito={ setCarrito }
                />
              )) }
            </TableProducts>
          </Fragment>
        }
      </Stack>
    </Container>
  </>)
};

export default Carrito;