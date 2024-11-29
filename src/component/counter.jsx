import './counter.css'
import { useEffect, useState } from "react"

function count() {
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log('hy there');
    },[count]);
    
    return (
        <div className='counter'>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button className='dec' disabled={count == 0} onClick={() => setCount(count - 1)}>Decriment</button>
            <button className='reset' disabled={count == 0} onClick={() => setCount(0)}>Reset button</button>
            <button className='inc' onClick={() => setCount(count + 1)}>Incriment</button>
        </div>
    )
}

export default count