
//Componentes

import ItemListContainer from './components/pages/ItemListContainer';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import MainRouter from './router/MainRouter';
import { getProducts } from "./services";
import { useEffect, useState } from "react";

//Estilos
import "./App.css";
//Importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi tienda!" productsData={productsData} />

    </div>
  );
}

export default App;
