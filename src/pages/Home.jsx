import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAnimals } from "../services/http_service";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import DeleteAnimal from "../components/DeleteAnimal";
import ModalForm from "../components/ModalForm";
import { useAnimals } from "../context/AnimalContext";

const Home = () => {

  const { animals } = useAnimals();

  return (<>
    <ModalForm />
    <center>      
      <TableContainer component={ Paper } style={{ width:"40%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell>
                <Typography>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Color</Typography>
              </TableCell>
              <TableCell>
                <Typography>Age</Typography>
              </TableCell>
              <TableCell>
                <Typography>Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { animals.map(item=>(
              <TableRow key={ item.id }>
                <TableCell>
                  <Typography>{ item.id }</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{ item.name }</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{ item.color }</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{ item.age }</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row">
                    <ModalForm id={ item.id } />
                    <DeleteAnimal 
                      id={ item.id } 
                      name={ item.name }
                      entity="customer"
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  </>)
};

export default Home;