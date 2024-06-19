import React from 'react'
import {Routes , Route} from "react-router-dom"
import { Home, AboutUs } from './Pages'


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
    </Routes>
  )
}

export default App
