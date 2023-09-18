import style from './Cart.module.css'
import { Button } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalPrice, removeItem, emptyCart } = useContext(CartContext)

    return (
        <div className={style['container']}>
            {
                cart.length === 0 ?
                    <div className={style['homeReturn']}>
                        <h3>Carrito vacío</h3>
                        <hr />
                        <Link to='/' className='btn btn-primary'>Volver a Inicio</Link>
                    </div> :
                    <>
                        <h3>Resumen de compras</h3>
                        <hr />
                        {
                            cart.map((prod) => (
                                <div className={style['list']}>
                                    <p>Título: {prod.title}</p>
                                    <p>Autor: {prod.author}</p>
                                    <img src={prod.image} className={style['image']} />
                                    <p>${prod.price}</p>
                                    <p>Cantidad: {prod.counter}</p>
                                    <button className={style['buton']} onClick={() => removeItem(prod.id)}>
                                        <BsTrash className={style['trash']} />
                                    </button>
                                </div>
                            ))
                        }
                        <hr />
                        <div className={style['priceButton']}>
                            <strong>Precio total: ${totalPrice()}</strong>
                            <hr />
                            <Button className='btn btn-danger mx-4 my-2' onClick={emptyCart}>Vaciar carrito</Button>
                            <Link className='btn btn-primary' to='/checkout'>Finalizar compra</Link>
                            <Link to='/' className='btn btn-primary mx-4'>Volver a Inicio</Link>
                        </div>
                    </>
            }
        </div>
    )
}

export default Cart