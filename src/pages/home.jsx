import React from 'react'
import bg from '../assets/bg.png'
import map from '../assets/map.png'
import search from '../assets/search.png'
import Home from '../components/homeSection2'


function home() {
  return (
    <div className='relative'>
    <img src ={bg}/>
    <p className='absolute left-0 top-48 text-5xl text-white font-bold pl-10 pt-10 font-[Inter]'>The Most Affordable <br/>Place To Stay In The<br/> San Franciso Bay Area</p>
    <img src={map} className='absolute left-96 top-14 pl-60'/>
    <img src={search} className='absolute left-96 top-96 pl-64 pt-12'/>
    <Home/>
    </div>
  
  )
}

export default home