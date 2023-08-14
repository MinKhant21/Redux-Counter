import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Cart() {
    const items = useSelector(state => state.cartSlice.items)
    const dispatch = useDispatch()
  return (
        <div className='container'>
          <table className='table table-striped'>
              <thead>
              <tr className='table'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
              </tr>
            </thead>
              <tbody>
                  {
                      items.map(item => {
                          return (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.images} className='img-thumbnail' style={{width:"100px",height:'100px'}} alt="produc" />
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    {item.price} Ks
                                </td>
                                <th>
                                    <a href="" className='btn btn-sm btn-success'>Order</a>
                                    <Button  className='btn btn-sm btn-danger' onClick={()=>dispatch(increase({
                                        type: 'REMOVE_CART',
                                        data:items
                                    }))}>Cancel</Button>
                                </th>
                            </tr>
                          )
                      })
                }
            
              </tbody>
            </table>
        </div>
  )
}
