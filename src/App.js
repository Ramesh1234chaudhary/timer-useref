import React from 'react'
import Login from './Components/Login'
import './App.scss';
import {  Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails';
import { useContext } from 'react';
import { allContext } from './Components/Context';

import Home from './Home';
const App = () => {
  const {islogedin}=useContext(allContext)
  return (
    <div  className='App'>
    {
islogedin ? <div> <Header/>
 <div className='container'>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
  



</Routes> </div></div> :<Login/>

}


</div>

)
}
    
 
export default App
