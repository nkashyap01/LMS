 import React from 'react'
import Home from './pages/student/Home'
import { Route, Routes } from 'react-router-dom'
 
 const App = () => {
   return (
     <div>
       <Routes>
        <Route path="/" element = {<Home/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App
 