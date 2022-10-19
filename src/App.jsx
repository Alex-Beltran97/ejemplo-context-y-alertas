import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AnimalProvider } from "./context/AnimalContext";
import Carrito from "./pages/Carrito";
import Home from "./pages/Home";

const App = () => {
  return (<>
    <Container>
       <AnimalProvider> {/*El provider lo implemento para rodear al conjunto de componentes en donde quiero que viajen mis valores*/}
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/carrito" element={ <Carrito /> } />
       </Routes>
      </AnimalProvider>
    </Container>
  </>)
};

export default App;