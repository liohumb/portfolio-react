import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'

import './assets/styles/App.scss'

function App() {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
