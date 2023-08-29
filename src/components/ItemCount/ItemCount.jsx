import React, {useState} from "react";
import styles from './itemcount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)   
        }
    }

    const reset = () => {
        setQuantity(0)
    }
    
    return(
        <>
            <p className={styles['cantidad']}>Cantidad: {quantity}</p>
            <div className={styles['botones']}>
                <button className={styles["btn"]} onClick={decrement}>➖</button>
                <button className={styles["btn"]} onClick={increment}>➕</button>
                <button className={styles["btn"]} onClick={reset}>🔄</button>
            </div>
            <div>
                <button className={styles['agregar']} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount