import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { Products, Product } from "./components/Products";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { NombreSecretoComponent } from "./contexts/NombreSecretoContext";

const App = () => {
  // let nombreSecreto = "Guillermo";
  // const [nombreSecreto, setNombreSecreto] = useState("Guillermo");
  // const saludarAtravesDelPadre = () => console.log("Hola");

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <NombreSecretoComponent>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                // nombreSecreto={nombreSecreto}
                // modificarNombreSecreto={setNombreSecreto}
                // saludarAtravesDelPadre={saludarAtravesDelPadre}
                />
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id/:subId" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<p>No encontramos lo que buscabas, lo sentimos.</p>}
            />
          </Routes>
        </main>
      </NombreSecretoComponent>
      <Footer />
    </>
  );
};

export default App;
