import React, { useState } from 'react'

// Hooks --> They are prebuilt functions, which provides some logics to implement in the UI
// useState
const DynamicRender = () => {
//   let count = 0;
  let [count, setCount] = useState(0);
  const handleAdd = () => {
    // console.log("Hello");
    // count++;
    setCount(count + 1);
    console.log("count", count);
  }

  const handleSubtract = () => {
    setCount(count - 1);
  }
  return (
    <div style={{ paddingInline: '20px' }}>
        <h5>{count}</h5>
        <button onClick={handleAdd}>Add +</button>
        <button onClick={handleSubtract}>Substact -</button>
    </div>
  )
}

export default DynamicRender;