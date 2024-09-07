import { ContainerCardItems } from "../components/components item/ContainerCardItems";
import { ItemDetails } from "../components/components item/ItemDetails";
import { ProviderContextCart } from "../components/components item/ProviderContextCart";
import { ContextCart } from "../components/header/ContextCart"; // Asegúrate de importar el contexto
import NavBar from "../components/header/NavBar";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProviderContextCart>
      <ContextCart>
        {" "}
        {/* Envolviendo todos los componentes en ambos contextos */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ContainerCardItems />} />
            <Route path="/item/:idItem" element={<ItemDetails />} />
            <Route
              path="/category/:idCategory"
              element={<ContainerCardItems />}
            />
          </Routes>
        </BrowserRouter>
      </ContextCart>
    </ProviderContextCart>
  );
}

export default App;
