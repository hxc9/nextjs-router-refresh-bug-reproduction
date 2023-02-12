"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function RouterRefreshDemo() {
    const router = useRouter()
    const [timestamp, setTimestamp] = useState<Date>()

    useEffect(() => {
        const intervalId = setInterval(() => {
            router.refresh()
            setTimestamp(new Date())
        }, 3000)
        return () => clearInterval(intervalId)
    }, [router])

    return <div>
        <p>This client component calls <code>router.refresh()</code> function</p>
        <p>Last refresh attempted at {timestamp?.toString()}</p>
    </div>
}