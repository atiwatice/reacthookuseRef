import React, {useState,useMemo} from 'react';

function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);


    const isEven = useMemo(() => {
        return count % 2 === 0;
      }, [count])
  
    return (
      <div>
        <p>You clicked {count} times</p>
        {isEven?(<>Thid number is even</>):(<></>)}
        <br/>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default Counter;