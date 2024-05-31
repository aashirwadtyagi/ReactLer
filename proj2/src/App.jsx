
import { useState } from 'react';
import './App.css'

function App() {
  
  let [count, setCount] = useState(15)

  const addValue = ()=>{
    console.log("Clicked", count);
    count = count+1
    setCount(count)
  }

  const removeValue = ()=>{
    count = count-1;
    if(count<0){
      setCount(0)
    }
    else{
      setCount(count)
    }
  }

  return (
    <>
      <h1>Aashirwad</h1>
      <h2>Counter: {count}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
    </>
  )
}

export default App
