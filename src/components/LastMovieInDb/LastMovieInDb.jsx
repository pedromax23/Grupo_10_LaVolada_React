import React, { useEffect, useState } from 'react';
import './LastMovieInDb.css'
import { Link } from 'react-router-dom';
import Producto from '../Producto/Prodcuto'

function LastMovieInDb(){

    const [lastProduct, setLastProduct] = useState({})

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(products => {
            setLastProduct(products.products[products.count-1])
        })
    }, [])

    const detalle = '/detalle/' + lastProduct.id

    return(
        <Producto producto={lastProduct} id={lastProduct.id}/>
    )
}

export default LastMovieInDb;