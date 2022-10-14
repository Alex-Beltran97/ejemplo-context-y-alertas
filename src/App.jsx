import { Container } from "@mui/material";
import { AnimalProvider } from "./context/AnimalContext";
import Home from "./pages/Home";

const App = () => {
  return (<>
    <Container>
       <AnimalProvider> {/*El provider lo implemento para rodear al conjunto de componentes en donde quiero que viajen mis valores*/}
        <Home />
      </AnimalProvider>
    </Container>
  </>)
};

export default App;