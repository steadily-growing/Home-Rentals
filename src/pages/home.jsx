import React from 'react'
import bg from '../assets/bg.png'


function home() {
  return (
    <div className='relative'>
    <img src ={bg}/>
    <p className='absolute left-0 top-48 text-4xl text-white font-bold'>The most affordable <br/>place to stay in the<br/> san franciso bay area</p>
    </div>
  
  )
}

export default home