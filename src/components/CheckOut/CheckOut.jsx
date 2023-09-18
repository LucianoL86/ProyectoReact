import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import styles from './CheckOut.module.css'
import { getFirestore } from "../../firebase/config"
import firebase from "firebase"
import 'firebase/firestore'
import Swal from "sweetalert2"


const CheckOut = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: {
                email,
                name,
                lastName,
                phone
            },
            item: cart,
            priceTotal: totalPrice(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(order)

        // Función para enviar la orden a firebase
        const db = getFirestore()
        const orders = db.collection('orders')

        orders.add(order)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada con éxito',
                    text: `Guarde su número de compra: ${res.id}`,
                    willClose: () => {
                        emptyCart()
                    }
                })
            })

        cart.forEach((item) => {
            const docRef = db.collection('products').doc(item.id)
            docRef.get()
                .then((doc) => {
                    docRef.update({
                        stock: doc.data().stock - item.counter
                    })
                })
        })
    }




    return (
        <div>
            <h3>Finalizar compra</h3>
            <hr />
            <form onSubmit={handleSubmit} className="container mt-3">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Celular</label>
                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className={styles['finishBuying']}>
                    <button type='submit' className='btn btn-success mx-3'>Finalizar</button>
                    <Link to='/cart' className='btn btn-primary'>Volver al carrito</Link>
                </div>
            </form>
        </div>
    )
}

export default CheckOut