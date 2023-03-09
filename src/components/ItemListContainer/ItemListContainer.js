import './ItemListContainer.css'
import { Button } from 'react-bootstrap'


const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="container my-5">
            <h2 className="list-container__title">Bienvenidos</h2>
            <hr/>

            <p>{greeting}</p>

          {/* <button className='btn btn-danger'>Click me</button> */}

          <Button variant='dark'>Click aqui</Button>
        </div>
    )
}

export default ItemListContainer