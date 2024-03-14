import React from 'react'
import { useEffect, useState } from 'react'

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
    }, [])

    return isOnline;
}

function IsOnline() {
    const isOnline = useIsOnline();

    return (
        <>
            {isOnline ? "You are online yay!" : "You are not online"}
        </>
    )
}
export default IsOnline