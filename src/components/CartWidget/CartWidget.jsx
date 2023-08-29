import styles from './cartwidge.module.css'
import { CgShoppingCart } from "react-icons/cg";


const CartWidget = () => {
    return (
        <div className={styles["cartIcon"]}>
            <CgShoppingCart className={styles['cart']} />
            <p className={styles['amount']}>1</p>
        </div> 
    )
}

export default CartWidget
