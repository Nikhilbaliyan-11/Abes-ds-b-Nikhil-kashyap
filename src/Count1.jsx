import React, { useState } from 'react'

function Count1() {
    const [count, setCount] = React.useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
  return (
    <div>
        <button style={{ margin: '0 5px', color: 'red' , width: '100px', fontSize: '20px' }} onClick={decrement}>-</button>
         <span style={{ margin: '0 5px', color: 'blue' , width: '100px', fontSize: '20px' }}>{count}</span>
      <button style={{ margin: '0 5px', color: 'green' , width: '100px', fontSize: '20px' }} onClick={increment}>+</button>

    </div>
  )
}
export default Count1;