import styles from './cartwidge.module.css'
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {

    const {calculateQuantity} = useContext(CartContext)

    return (
        <div className={styles["cartIcon"]}>
            <CgShoppingCart className={styles['cart']} />
            <span className={styles['amount']}>{calculateQuantity()}</span>
        </div> 
    )
}

export default CartWidget
