import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme, setTheme] = useContext(themeDataContext)

    const changeTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
        console.log('Theme is changed to', {theme})
    }

    return (
        <div>
            <button onClick={changeTheme}> Change Theme </button>
        </div>
    )
}

export default Button
