import React, { useEffect, useState } from "react";
import './Variedades.css'

function Variedades() {

  const [variedades, setVariedades] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/api/products/variedades')
        .then(res => res.json())
        .then(variedades => {
          setVariedades(variedades.variedades)
        })
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Variedades
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            {
              variedades.map((variedad, id) => (
                <div key={'Variedad' + id} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{variedad.name}</div>
                  </div>
                </div>
              ))
            }



          </div>
        </div>
      </div>
    </div>
  );
}

export default Variedades;