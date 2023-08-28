import products from "../data/products"


const orderProducts = () => {

    // Se establece una nueva promesa que resuelve o rechaza en 2 segundos el stock
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
            reject('Rechazado')
        }, 1000)
    })
}

export default orderProducts