import React from 'react'
import glass from '../assets/glass.png'
import Smallcards from '../components/smallcards'

function homeSection2() {
  return (
    <div className=''>
      <div className=''>
        <div className='px-10'>
          <p className='text-3xl font-[Inter-ExtraBold] font-bold pt-14 pb-2'>Minimum Living Cost Takes Care Of Everything</p>
          <hr className="border-2 border-orange-600 w-80 " />
        </div>

        <div className='flex'>
          <img src={glass}/>
        <Smallcards/>
        </div>

      </div>
    
    </div>
  )
}

export default homeSection2