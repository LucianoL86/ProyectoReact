import styles from './itemDetail.module.css'
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ title, price, author, image, category, editorial, description, stock }) => {

    const { insideTheCart } = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const addToCart = () => {
        if (counter >= 1) {
            const newItem = {
                title,
                author,
                price,
                image,
                description,
                counter,
            }
            insideTheCart(newItem)
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const navigate = useNavigate()
    const turnBack = () => {
        navigate(-1)
    }

    //  Se pasa mediante props cada propiedad de los productos (objetos)
    return (
        <div className='container d-flex justify-content-center text-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Title>{author}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>${price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <Card.Title>Editorial:{editorial}</Card.Title>
                    <p>{description}</p>
                    <ItemCount max={stock} modify={setCounter} amount={counter} />
                    <div className={styles['buttonsDetail']}>
                        <Button variant='primary' className={styles['buttonCart']} onClick={addToCart}>Agregar al carrito</Button>
                        <Link to='/Cart' className='btn btn-primary'>Ir al carrito</Link>
                        <Button onClick={turnBack} className='btn btn-success'>Volver atrás</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail