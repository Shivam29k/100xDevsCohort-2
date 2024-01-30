import { useState } from 'react'
import { CountContext } from './context.jsx';
import { useContext } from 'react';

export function Contextapi() {
    const [count, setCount] = useState(0)

    // wrap everyone who want to use the value in side the a context wrapper.
    return (
        <div>
            <CountContext.Provider value={[count, setCount]}>
                <Count />
            </CountContext.Provider>
        </div>
    )
}

// count and setCount isn't unnessaserly passed to Count
function Count() {
    return <div>
        <Countrerender />
        <Buttons />
    </div>
}

function Countrerender() {
    const [ count ] = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons() {
    const [ count, setCount ] = useContext(CountContext); 

    // const count = useContext(CountContext); 
    return <div>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1);
        }}>Decrease</button>
    </div>
}