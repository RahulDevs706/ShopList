import React, { Fragment } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import AddShop from "./Components/AddShop.jsx"
import Header from './Components/Header.jsx'
const App = () => {



  return (
    <Fragment>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddShop />} />
      </Routes>
    </Fragment>
  )
}

export default App