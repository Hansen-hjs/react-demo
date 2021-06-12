import { useState } from "react";

function moduleStore() {
    const [info, setInfo] = useState({
        date: new Date().getFullYear(),
        value: Math.random().toString(36).slice(2)
    })
    
    return {
        info,
        setInfo
    }
}

const store = moduleStore();

export default store;
