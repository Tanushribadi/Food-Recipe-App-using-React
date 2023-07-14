import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
export default function Pages () {

    //to move to other pages these are added here
    return (
        <>
        <div>
          
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cuisine/:type" element={<Cuisine/>}/>
                <Route path="/Searched/:search" element={<Searched/>}/>
                <Route path="/Recipe/:id" element={<Recipe/>}/>
            </Routes>
           
          
        </div>
        </>
    )
}