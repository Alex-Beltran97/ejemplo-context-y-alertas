import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useAnimals } from "../context/AnimalContext";
import FormPrueba from "./FormPrueba";
import Result from "./Result";

const ModalForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleOpen = ()=>{
    setSuccess(false);
    setHasError(false);
    setOpen(e=>!e);
  };

  return (<>
    {!id?
      <Button variant="contained" onClick={ handleOpen }>Add Animal</Button>
      :
      <IconButton onClick={ handleOpen }>
        <IoCreateOutline />
      </IconButton>
    }    
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={ style }>
        {!id?
          <Typography variant="h5" textAlign="center">Create Animal</Typography>
          :
          <Typography variant="h5" textAlign="center">Edit Animal</Typography>
        }    
        {!success?
          <FormPrueba id={ id } 
            setSuccess={ setSuccess }
            setHasError={ setHasError }
          />
          :
          <Result hasError={ hasError }>
            <Button variant="contained" onClick={ handleOpen }>Close</Button>
          </Result>
        }
      </Paper>
    </Modal>
  </>)
};

const style = {
  position:"absolute",
  width:"40%",
  top:"24%",
  left:"32%",
  padding:"1rem"
};

export default ModalForm;