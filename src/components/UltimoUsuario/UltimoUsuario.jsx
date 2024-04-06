import React, { useEffect, useState } from 'react';



function UltimoUsuario(){

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        fetch('http://localhost:3030/api/users')
        .then(res => res.json())
        .then(data => {
            setUsuario(data.users[data.count-1])
        })
    }, [])

   console.log(usuario)
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h3>{usuario.name}</h3>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={usuario.img} alt=" Ultimo Usuario "/>
                   
                    </div>
                   
                   </div>
            </div>
        </div>
    )
}



export default UltimoUsuario;