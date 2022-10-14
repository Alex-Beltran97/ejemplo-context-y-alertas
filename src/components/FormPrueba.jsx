import { Button, InputLabel, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useAnimals } from "../context/AnimalContext";
import { getAnimalById, postAnimals, putAnimal } from "../services/http_service";

const FormPrueba = ({ id:idAnimal, setSuccess, setHasError }) => {
  const [animal, setAnimal] = useState({
    id:idAnimal,
    name:"",
    color:"",
    age:0,
  });

  const { getAnimalsData } = useAnimals(); // Aqui invoco al contesto para tomar los valores que yo estableci

  const createAnAnimal = async (data) =>{
    try{
      const result = await postAnimals(data);
      setSuccess(true);
      console.log(result);
      getAnimalsData();
    }catch(error){
      setSuccess(true);
      setHasError(true);
      console.log(error);
    };
  };
  
  const updateAnimal = async (id, data) =>{
    try{
      const result = await putAnimal(id, data);
      setSuccess(true);
      console.log(result);
      getAnimalsData();
    }catch(error){
      setSuccess(true);
      setHasError(true);
      console.log(error);
    };
  };

  const getAnimal = async (id)=>{
    try{
      const { data } = await getAnimalById(id);
      setAnimal(data);
    }catch(error){
      console.log(error);
    };
  }

  useEffect(() => {
    if(idAnimal){
      getAnimal(idAnimal);
      return 
    };
  }, []);

  return (<>
    <Formik
      initialValues={ animal }

      enableReinitialize

      onSubmit={(values)=>{
        const {id, ...dataToSend} = values;

        if(idAnimal){
          updateAnimal(id,dataToSend);
          return 
        };

        createAnAnimal(values);
      }}
    >
      {()=>(
        <Form>
          <Stack>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Field type="text" name="name" />
            <InputLabel htmlFor="color">Color:</InputLabel>
            <Field type="text" name="color" />
            <InputLabel htmlFor="age">Age:</InputLabel>
            <Field type="number" name="age" />
            <Button variant="contained" type="submit">Send</Button>
          </Stack>
        </Form>
      )}

    </Formik>
  </>)
};

export default FormPrueba;