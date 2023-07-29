import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset } from './features/counter/counterSlice';
export default function App() {
  const counter = useSelector(store => store.counter.count);
  const dispatch =  useDispatch()
  return (
    <div>
      <h3>counter : { counter }</h3>
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
