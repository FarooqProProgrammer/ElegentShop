import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import Header from '../components/Header'

export default function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/shop' Component={Shop} />
            </Routes>
        </BrowserRouter>
    )
}
