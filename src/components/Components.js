import React from 'react'
import { useState } from 'react'

function Components() {
  let [value, setValue] = useState(0);
  let [inputValue, setInputValue] = useState(0);
  return (
    <div>
      {value}
      <div>
        <input type="number" onChange={(e)=>setInputValue(Number(e.target.value))}/>
        <button onClick={()=>setValue(value+inputValue)}>Add Input</button>
        <button onClick={()=> setValue(value+1)}>+</button>
      </div>
    </div>
  )
}

export default Components
