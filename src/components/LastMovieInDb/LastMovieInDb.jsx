import React, { useEffect, useState } from 'react';
import './LastMovieInDb.css'
import { Link } from 'react-router-dom'; 

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
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.img} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{lastProduct.description}</p>
                    <Link className="btn btn-danger" rel="nofollow" to={detalle}>Detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;