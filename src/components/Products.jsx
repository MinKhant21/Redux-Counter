import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../features/cart/cartSlice'

export default function Products() {
    const [products, setProducts] = useState([])
    const count = useSelector((state) => state.cartSlice.value)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
            setProducts(res.data)
        })
    },[setProducts])
  return (
      <div className="container">
          <div className="row">
              {
                  products.map(product => 
                    <div className="col-md-3" key={product.id}>
                      <div className="card" style={{width: "18rem"}}>
                          <img src={product.images} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{ product.title}</h5>
                              <p className="card-text">{product.description}</p>
                                  <a className="btn btn-primary" onClick={() => dispatch(increase({
                                      type: "ADD_TO_CART",
                                      data:product.id,
                                }))}>Add To Cart</a>
                          </div>
                      </div>
                  </div>
                  )
              }
          </div>
    </div>
  )
}
