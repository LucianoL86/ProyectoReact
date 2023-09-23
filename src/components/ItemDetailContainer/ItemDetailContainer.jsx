import {getFirestore} from '../../firebase/config.js'
import { ImSpinner3 } from 'react-icons/im'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {id} = useParams()

    useEffect (() => {
        setLoading(true)

        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(id)

        item.get()
            .then((doc) => {
                setItems({id: id, ...doc.data()})
            })
            .catch((error) => setError(true))
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            {
                loading ? <ImSpinner3/> : error ? "ERROR" :
                <ItemDetail {...items}/>
            }
        </div>
    )
}

export default ItemDetailContainer