import { React, useState, useEffect, useRef } from 'react';
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
						<div className="col-sm-6 col-md-3 my-4" key={'producto' + id}>
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">{producto.name}</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img
											className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
											src={producto.img}
										/>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default BuscarProducto;
