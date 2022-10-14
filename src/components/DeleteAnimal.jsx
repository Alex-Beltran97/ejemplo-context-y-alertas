import { Button, IconButton, Modal, Paper, Stack, Typography } from '@mui/material'
import { Fragment, useState } from 'react'
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoTrashOutline } from 'react-icons/io5'
import { useAnimals } from '../context/AnimalContext';
import { deleteAnimals } from '../services/http_service';
import QuestionMsg from './QuestionMsg';
import Result from './Result';

const DeleteAnimal = ({ id, name, entity }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { getAnimalsData } = useAnimals(); // Aqui invoco al contesto para tomar los valores que yo estableci

  const handleOpen = () =>{
    setSuccess(false);
    setHasError(false);
    setOpen(e=>!e);
    getAnimalsData();
  };

  const deleteAnimalFn = async () =>{
    try{
      const data = await deleteAnimals(id);
      setSuccess(true)
      console.log(data);
    }catch(error){
      setSuccess(true)
      setHasError(true);
      console.log(error);
    };
  };

  return (
    <>
      <IconButton onClick={ handleOpen }>
        <IoTrashOutline />
      </IconButton>
      <Modal
        open={ open }
        onClose={ handleOpen }
      >
        <Paper style={ style }>
          <Typography variant="h5" textAlign="center">Delete Animals</Typography>
          {!success?
            <QuestionMsg name={ name } entity={ entity }>
              <Button variant="contained" onClick={ deleteAnimalFn }>Confirm</Button>
              <Button variant="contained" onClick={ handleOpen }>Cancel</Button>
            </QuestionMsg>
            :
            <Fragment>
              <Result hasError={ hasError }>
                <Button variant="contained" onClick={ handleOpen }>Close</Button>
              </Result>
            </Fragment>
          }
        </Paper>
      </Modal>
    </>
  )
};

const style = {
  position:"absolute",
  width:"32%",
  top:"24%",
  left:"32%",
  padding:"1rem"
};

export default DeleteAnimal