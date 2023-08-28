import React, {useState} from "react";
import styles from './itemcount.module.css'

const ItemCount = () => {
    
    const [counter, setCounter] = useState(0)
    
    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if(counter > 0) {
            setCounter(counter - 1)   
        }
    }

    const reset = () => {
        setCounter(0)
    }
    
    return(
        <>
        <p className={styles['cantidad']}>Cantidad: {counter}</p>
        <div className={styles['botones']}>
            <button className={styles["btn"]} onClick={sumar}>➕</button>
            <button className={styles["btn"]} onClick={restar}>➖</button>
            <button className={styles["btn"]} onClick={reset}>🔄</button>
        </div>
        </>
    )
}

export default ItemCount