import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const insideTheCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        counter: cartItem.counter + 1,
                    };
                }
                return cartItem
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, item])
        }
    }

    const calculateQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter((prod) => prod.id !== itemId)
        setCart(newCart)
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            insideTheCart,
            calculateQuantity,
            totalPrice,
            removeItem,
            cart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
