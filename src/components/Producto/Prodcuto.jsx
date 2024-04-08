import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Producto.css'

function Producto(props){

    return(
        <div className="col-sm-6 col-md-3 my-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{props.producto.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                            src={props.producto.img}
                        />
                    </div>
                    <Link className='boton__detalle' to={'/detalle/' + props.producto.id}>Detalle</Link>
                </div>
            </div>
		</div>
    )
}

export default Producto;