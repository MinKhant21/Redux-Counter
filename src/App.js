import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './features/counter/counterSlice'

export default function App() {
  const counter = useSelector((state) =>state.counterSlice.value)
  const dispatch = useDispatch()
  return (
    <div>
      {counter}
      
      <button type="button" className="btn btn-default" onClick={()=>dispatch(increase())}>add</button>
      <button type="button" className="btn btn-default" onClick={()=>dispatch(decrease())}>add</button>
      
    </div>
  )
}
