import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer greeting={"Bienvenidos!"} />}
        />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/CartWidget" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
