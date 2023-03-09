import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Tu hamburgueseria preferida"}/>

    </div>
  );
}

export default App;
