import React, { useEffect, useState } from 'react'
import orderProducts from '../../helpers/orderProducts'
import ItemList from '../ItemList/ItemList'
import { ImSpinner3 } from 'react-icons/im'
import styles from './itemlistcontainer.module.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        // Se inicia el montaje con un loading en true
        setLoading(true)
        orderProducts()
            .then((response) => {
                // Se imprime respuesta y se guarda en el hook
                if(id) {
                    setItems(response.filter(libros => libros.category === id))
                }else {
                    setItems(response)
                }              
            })
            // Consoleamos errores
            .catch((error) => console.log(error))
            .finally(() => {setLoading(false)})


    }, [id])

    // El componente arranca con el loading en true y cuando resuelve imprime en pantalla el componente ItemList
    return (
        <>
            {
                loading ? 
                <div className={styles['spinner']}>
                    <ImSpinner3/>
                </div>
                : <ItemList products={items} />
            }
        </>
    )
}

export default ItemListContainer
