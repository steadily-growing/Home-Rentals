import React from 'react'
import glass from '../assets/glass.png'
import money from '../assets/money.png'

function homeSection2() {
  return (
    <div className=''>
      <div className=''>
        <div className='px-10'>
          <p className='text-3xl font-[Inter-ExtraBold] font-bold pt-14 pb-2'>Minimum Living Cost Takes Care Of Everything</p>
          <hr className="border-2 border-orange-600 w-80 " />
        </div>

        <div>
          <img src={glass} />
        </div>

      </div>
      {/* <div className='bg-white rounded shadow-md overflow-hidden'>
        <img src={money} />
      </div> */}
    </div>
  )
}

export default homeSection2