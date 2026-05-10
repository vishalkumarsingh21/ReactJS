/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const themeDataContext = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

    return (
        <div>
            <themeDataContext.Provider value={{theme, setTheme}}>
                {props.children}
            </themeDataContext.Provider>
        </div>
    )
}

export default ThemeContext

// create karo context
// provide kara data
// use karo us data ko