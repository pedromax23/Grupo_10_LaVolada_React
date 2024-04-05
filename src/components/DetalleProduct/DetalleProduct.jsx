import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

function DetalleProduct(){

    const [product, setProduct] = useState({})

    let { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:3030/api/products/' + id)
        .then(res => res.json())
        .then(products => {
            setProduct(products.product)
        })
    }, [])

    return(
        <div className="col-lg-6 mb-4">
            <h1>{product.name}</h1>
        </div>
    )
}

export default DetalleProduct;