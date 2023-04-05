import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No hay productos agregados</h2>
                <hr/>
                <Link className="btn btn-primary" to="/">↩Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>

            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img}/>
                        <div>
                            <small>Cantidad: {item.cantidad} Precio: {item.price}</small>
                        </div>
                        <p>Precio total: {item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr/>
                    </div>
                ))
            }
↩️
            <h3>Total: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
        </div>
    )
}

export default Cart