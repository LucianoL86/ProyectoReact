import styles from './itemDetail.module.css'
import {Card, Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({title, price, author, image, category, editorial, review}) => {

    //  Se pasa mediante props cada propiedad de los productos (objetos)
    return (
        <div className={styles['item']}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{author}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <Card.Title>{editorial}</Card.Title>
                    <p>{review}</p>
                    <ItemCount/>
                    <Button variant="primary" className={styles['agregar']}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail