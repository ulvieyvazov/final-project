import React, { useEffect, useState } from 'react'
import "./index.css"


const DarkMode = () => {

    
    const [mode, setMode] = useState(localStorage.getItem("dark") || "light")

    const toggleDark = () => {
        setMode((pre) => !pre)
        if (mode === "light") {
            setMode("dark")
        }
        else {
            setMode('light')
        }
    }

    useEffect(() => {
        localStorage.setItem("dark", mode)
        document.body.className = mode
    }, [mode])

    return (
        <div>
            <div className={`${mode}`}>
                <button style={{padding: '1px 3px', border: '0', cursor: 'pointer'}} onClick={toggleDark}>
                    {mode === "dark" ? "🌙" : "☀"}
                </button>
            </div>
        </div>  
    )
}

export default DarkMode
