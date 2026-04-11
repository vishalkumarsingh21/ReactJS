import React from 'react'
import Card from './components/Card'

const App = () => {
    return (
        <div className='parent'>
            <Card user='Rohan' age={20} img='https://plus.unsplash.com/premium_photo-1752453987913-ff1c96b20d6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Card user='Arpit' age={12} img='https://plus.unsplash.com/premium_photo-1676813808802-d71321776c89?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Card user='Satyam' age={22} img='https://plus.unsplash.com/premium_photo-1771458556602-0a66f6b9f467?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
    )
}

export default App


