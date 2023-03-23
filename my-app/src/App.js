import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hamburguesas from './components/Hamburguesas/Hamburguesas';
import Nuggets from './components/Nuggets/Nuggets';
import Bebidas from './components/Bebidas/Bebidas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/Hamburguesas' element={ <Hamburguesas /> }/>
        <Route path='/Nuggets' element={ <Nuggets /> }/>
        <Route path='/Bebidas' element={ <Bebidas /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
