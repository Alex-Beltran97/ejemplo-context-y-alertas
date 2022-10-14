import { createContext, useContext, useEffect, useState } from 'react'
import { getAnimals } from '../services/http_service';

// Esto es lo primero que creamos si queremos usar context
const AnimalContext = createContext();

// Este Hook nos permite llevarnos el contexto a la pagina o componente en el que queremos usarlo
const useAnimals = () =>{
  const context = useContext(AnimalContext);
  if(context) return context;
};

// El provider se encarga de rodear a la aplicacion o a el conjunto de componentes sobre el cual queremos utilizar este
const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);

  /*
    En todo es espacio, nosotros nos encargamos de aplicar la logica de la apliacion para 
    usarla en los servicios que necesitemos.

    En este caso yo estoy ejecutando el endpoint que se encarga de traerme a todos los
    animales de mi base de datos. Y como necesito actualizarlo constantemente,
    lo traigo aqui para que mis demas coponentes lo actualicen cuando ellos quieran
  */

  const getAnimalsData = async () =>{
    try{
      const { data } = await getAnimals();
      setAnimals(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getAnimalsData();
  }, []);

  return (<>
    <AnimalContext.Provider value={{ // Aqui almaceno dentro de un objeto los valores o metodos que necesito
      animals,                       // para usarlos en mi aplicacion
      getAnimalsData
    }}>
      { children }
    </AnimalContext.Provider>
  </>)
};

export { AnimalProvider, useAnimals };