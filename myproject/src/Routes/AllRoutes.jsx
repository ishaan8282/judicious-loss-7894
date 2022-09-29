import React from 'react'
import {Routes,Route} from "react-router-dom"
import Contact from '../Components/Contact'
import FindParking from '../Components/FindParking'
import Home from '../Components/Home'
import Login from '../Components/Login'



function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/FindParking" element={<FindParking/>}></Route>
            <Route path="/Login" element={<Login/>}> </Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes