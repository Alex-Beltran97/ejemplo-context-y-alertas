import { Button, Grid, InputLabel, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { v4 as uuidV4 } from "uuid";

const Formulario = ({ carrito, setCarrito, setDate, setCustomer, setTotal }) => {
  return (<>
    <Formik
      initialValues={{
        date:"",
        customer:"",
        product:"",
        price:"",
        amount:"",
        subTotal:"",
      }}

      onSubmit={(values)=>{
        const { date, customer, ...otherData } = values;

        setDate(date);
        setCustomer(customer);

        const dataToSend = {
          id:uuidV4(),
          ...otherData
        };

        setCarrito([...carrito, dataToSend]);
      }}
    > 
      {()=>(
        <Form>
          <Stack spacing={ 2 }>
            <Grid container>
              <Grid item xs={ 10 }>
                <Grid container>
                  <Grid item xs={ 4 }>
                    <InputLabel htmlFor="date">Date:</InputLabel>
                    <Field type="date" name="date" />
                  </Grid>
                  <Grid item xs={ 4 }>
                    <InputLabel htmlFor="customer">Customer:</InputLabel>
                    <Field as="select" name="customer">
                      <option value="">Choose one</option>
                      <option value="juanito">Juanito</option>
                      <option value="pepito">Pepito</option>
                    </Field>
                  </Grid>
                  <Grid item xs={ 4 }>
                    <InputLabel htmlFor="product">Product:</InputLabel>
                    <Field as="select" name="product">
                      <option value="">Choose one</option>
                      <option value="Jalea de manaza">Jalea de manaza</option>
                      <option value="Jalea de limon">Jalea de limon</option>
                    </Field>
                  </Grid>
                  <Grid item xs={ 4 }>
                   <InputLabel htmlFor="price">Price:</InputLabel>
                   <Field type="number" name="price" />
                  </Grid>
                  <Grid item xs={ 4 }>
                    <InputLabel htmlFor="amount">Amount:</InputLabel>
                    <Field type="number" name="amount" />
                  </Grid>
                  <Grid item xs={ 4 }>
                    <InputLabel htmlFor="subTotal">SubTotal:</InputLabel>
                    <Field type="number" name="subTotal" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={ 2 }>
                <Button variant="contained" type="submit">Send</Button>
              </Grid>
            </Grid>
            
          </Stack>
        </Form>
      )}
    </Formik>
  </>)
};

export default Formulario;