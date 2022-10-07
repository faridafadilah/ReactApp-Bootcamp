import React from "react";
//Pemanggilan Selector dan dispatch dari react-redux
import { useSelector, useDispatch } from "react-redux";
// Pemanggilan Action yang sudah dibuat
import { increment, decrement, reset } from "./redux/action/counter";

function App() {
  // Pemanggilan useSelector yang terdapat callback argument state lalu mereturn nama reducer
  const counter = useSelector((state) => state.counter);
  // Pemanggilan function dispatch
  const dispatch = useDispatch();
  return (
    <div>
      Nilai Count: {counter.count}
      <br />
      {/* Pemanggilan dispatch yang diinisialisasikan dan sisipkan action yang sudah dibuat */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default App;
