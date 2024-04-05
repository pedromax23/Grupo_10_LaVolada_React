import React, { useEffect, useState } from 'react';
import SmallCard from '../SmallCard/SmallCard';
import './ContentRowMovies.css'

function ContentRowMovies(){

    const [users, setUsers] = useState({})
    const [products, setProducts] = useState({})

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(products => {
            setProducts({
                title: 'Productos',
                cuantity: products.count,
                color: 'primary'
            })
        })
        fetch('http://localhost:3030/api/users')
        .then(res => res.json())
        .then(users => {
            setUsers({
                title: 'Usuarios',
                cuantity: users.count,
                color: 'success'
            })
        })
    }, [])



    return (
    
        <div className="row">
            
            <SmallCard data={users}/>
            <SmallCard data={products}/>

        </div>
    )
}

export default ContentRowMovies;