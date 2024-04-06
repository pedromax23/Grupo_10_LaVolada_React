import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Producto from '../Producto/Prodcuto'
import './BuscarProducto.css'

function BuscarProducto(){

	const [productos, setProductos] = useState([])
	const [keyword, setKeyword] = useState('')
	const newKeyword = useRef()
			
	useEffect(() => {
		fetch('http://localhost:3030/api/products/buscador?s='+keyword)
		.then(respuesta => respuesta.json())
		.then(data => {
			if (data && data.productos) {
				setProductos(data.productos);
			} else {
				setProductos([]);
			}
		})
	}, [keyword])

	const handleSubmit = (event) => {
        event.preventDefault();
        setKeyword(newKeyword.current.value);
    };

	return (
		<div className="container-fluid">
			<form  onSubmit={handleSubmit} method="GET">
				<div className="form-group">
					<label htmlFor="">Buscar por título:</label>
					<input  ref={newKeyword} type="text" className="form-control" />
				</div>
				<button className="btn btn-info">Search</button>
			</form>

			<div className="row">
				{
					productos.map((producto, id) => (
						<Producto producto={producto} key={'producto' + id}/>
					))
				}
			</div>
		</div>
	)
}

export default BuscarProducto;
