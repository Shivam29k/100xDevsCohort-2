import { useState } from 'react'

export function Propdrilling() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Count count={count} setCount={setCount} />
        </div>
    )
}

function Count({ count, setCount }) {
    return <div>
        <Countrerender count={count} />
        <Buttons count={count} setCount={setCount} />
    </div>
}

function Countrerender({ count }) {
    return <div>
        {count}
    </div>
}

function Buttons({ count, setCount }) {
    return <div>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1);
        }}>Decrease</button>
    </div>
}