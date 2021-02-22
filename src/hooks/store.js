import { useState } from "react";

export const [info, setInfo] = useState({
    date: new Date().getFullYear(),
    value: Math.random().toString(36).slice(2)
})
