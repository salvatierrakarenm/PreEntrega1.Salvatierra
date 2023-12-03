
//Componentes

import ItemListContainer from './components/ItemListContainer';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';


//Estilos
import "./App.css";
//Importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi tienda!" />

    </div>
  );
}

export default App;
