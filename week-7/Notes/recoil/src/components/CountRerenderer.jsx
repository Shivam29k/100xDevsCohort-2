import { useContext } from "react";
import { CountContext } from "./context";

export function Countererenderer() {
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}
