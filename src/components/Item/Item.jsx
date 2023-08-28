import styles from './item.module.css'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, author, image}) => {

    //  Se pasa mediante props cada propiedad de los productos (objetos)
    return (
        <div className={styles['item']}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{author}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Link to={`/item/${id}`}>
                        <Button variant="primary">Ver mas</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
