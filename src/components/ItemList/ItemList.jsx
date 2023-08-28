import Item from "../Item/Item"
import styles from './itemList.module.css'

const ItemList = ({products=[]}) => {

    // Se pasa mediante props el array de 'stock' y recorremos todos los items con .map y con spread operator
    return (
        <div className={styles['container']}>
            <h3>¡Bienvenidos a Librería del Sur!</h3>
            <div className={styles['fila']}>
                {products.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default ItemList