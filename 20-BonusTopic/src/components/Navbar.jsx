import React from 'react'

const Navbar = (props) => {

    function changeTheme() {
        // console.log('theme change')
        props.setTheme('Dark')
    }
    return (
        <div>
            <button onClick={changeTheme}> Change Theme </button>
        </div>
    )
}

export default Navbar
