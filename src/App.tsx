import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Research from './Pages/Research';
import Projects from './Pages/Projects';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/*
Link: creates navigation link that update the <URL>
Routes: container for all route definitions
Route: defines mapping between URL path and component
*/
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/research' element={<Research />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
