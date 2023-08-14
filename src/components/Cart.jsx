import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const items = useSelector(state => state.cartSlice.items)
    const [productList , setProductList] = useState([])
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(res => {
               items.map((items) => {
                    return res.data.filter((list) => {
                        if (list.id == items) {
                        return setProductList(list)
                    }
                 })
            
                
            })
        })
    }, [setProductList,items])
    console.log(productList)
  return (
        <div className='container'>
          <table className='table table-striped'>
              <thead>
              <tr className='table'>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
              </tr>
            </thead>
              <tbody>
              
              <tr>
                  <td>1</td>
                  <td>
                      <img src="" alt="produc" />
                  </td>
                  <td>
                      hello
                  </td>
                  <td>
                      hello
                  </td>
                  <td>
                      1000
                  </td>
                  <th>
                      <a href="" className='btn btn-sm btn-success'>Order</a>
                      <a href="" className='btn btn-sm btn-danger'>Cancel</a>
                  </th>
              </tr>
              </tbody>
            </table>
        </div>
  )
}
