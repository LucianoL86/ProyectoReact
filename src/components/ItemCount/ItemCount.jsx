
import styles from './itemcount.module.css'

const ItemCount = ({max, modify, amount}) => {
    
    
    const increment = () => {
        if (amount < max)
        modify(amount + 1)
    }

    const decrement = () => {
        if(amount > 1) {
            modify(amount - 1)   
        }
    }

    
    return(
        <>
            <p className={styles['cantidad']}>Cantidad: {amount}</p>
            <div className={styles['botones']}>
                <button className={styles["btn"]} onClick={decrement}>➖</button>
                <button className={styles["btn"]} onClick={increment}>➕</button>
            </div>
        </>
    )
}

export default ItemCount