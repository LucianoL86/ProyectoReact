import orderProducts from '../../helpers/orderProducts'
import { ImSpinner3 } from 'react-icons/im'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect (() => {
        setLoading(true)
        orderProducts()
            .then(response => {
                setItems(response.find(libros => libros.id === Number(id)))
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            {
                loading ? <ImSpinner3/> :
                <ItemDetail {...items}/>
            }
        </div>
    )
}

export default ItemDetailContainer