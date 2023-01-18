import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landlord from './pages/landlord'
import Tenants from './pages/tenants'
import Home from './pages/home'
import Contact from './pages/contactus'
import  NoPage from './pages/NoPage'
import Nav from './components/nav'

function App() {
  return (
    <div className='bg-hero'>
  <Router>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="landlord" element={<Landlord />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </Router>
    </div>
  )
}

export default App;
