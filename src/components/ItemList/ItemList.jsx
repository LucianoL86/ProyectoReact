import Item from "../Item/Item"
import styles from './itemList.module.css'

const ItemList = ({products=[]}) => {

    return (
        <div className={styles['container']}>
            <h2>Nuestros libros</h2>
            <div className={styles['fila']}>
                {products.map((item) => <Item {...item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default ItemList