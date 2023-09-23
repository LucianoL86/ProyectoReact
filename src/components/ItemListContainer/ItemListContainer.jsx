import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase/config'
import ItemList from '../ItemList/ItemList'
import { ImSpinner3 } from 'react-icons/im'
import styles from './itemlistcontainer.module.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ }) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const products = id ? db.collection('products').where('category', '==', id)
            : db.collection('products')
            products.get()
                .then((res) => {
                    const newItem = res.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    setItems(newItem)
                })
                .catch((error) => setError(true))
                .finally(() => {
                    setLoading(false)
                }
            )
    }, [id, setLoading])
        
    return (
        loading ?
            <div className={styles['spinner']}>
                <ImSpinner3 />
            </div> : error ? "ERROR"
                : <ItemList products={items} />

    )
}

export default ItemListContainer
