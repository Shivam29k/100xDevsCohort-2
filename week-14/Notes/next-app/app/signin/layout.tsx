import { Children } from "react";

export default function({children} : {children: React.ReactNode}) {
    return (
        <div>
            20% off on all products
            {children}
        </div>
    )
}