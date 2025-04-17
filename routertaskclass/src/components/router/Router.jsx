import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../../pages/Layout'
import Home from '../../pages/Home'
import Team from '../../pages/Team'
import NotFound from '../../pages/NotFound'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
           <Route element= {<Layout/>}>
           <Route path="/" element={<Home/>}/>
            <Route path="/team" element ={<Team/>}/>
           </Route>
           <Route path=""element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router