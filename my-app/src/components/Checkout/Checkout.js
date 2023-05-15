import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, getDocs, query } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.nombre.length < 3) {
            alert("El nombre es muy corto")
            return
        }
        if (values.apellido.length < 6) {
            alert("El apellido es muy corto")
            return
        }
        if (values.direccion.length < 6) {
            alert("La direccion es muy corto")
            return
        }
        if (values.email.length < 6) {
            alert("El email es muy corto")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido registrada exitosamente!</h2>
                <hr/>
                <p>Guardá tu número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Ingresa tus datos</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu nombre"
                    onChange={handleInputChange}
                    name="nombre"
                />
                                <input
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu apellido"
                    name="apellido"
                    onChange={handleInputChange}
                />
                <input
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu direccion"
                    name="direccion"
                    onChange={handleInputChange}
                />
                <input
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                    name="email"
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout