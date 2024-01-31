import { useContext } from "react";
import { CountContext } from "./context";

export function Buttons({setCount}) {
    const count = useContext(CountContext); 

    return <div>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1);
        }}>Decrease</button>
    </div>
}