import React from 'react'
import money from '../assets/money.png'
import house from '../assets/house.png'
import stack from '../assets/stack.png'
import plant from '../assets/plant.png'
import shield from '../assets/shield.png'
import eye from '../assets/eye.png'

function smallcards(){
  return (
    <div>
      <div className='flex justify-between w-[auto]'>
        <div>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <img src={money} />
          </div>
          <p className='font-[Inter-SemiBold] font-bold'>Pay as little
            <br /> as possible</p>
        </div>
        <div >
          <div className='bg-white rounded-lg shadow-md p-4'>
            <img src={house} />
          </div>
          <p className='font-[Inter-SemiBold] font-bold'>Enjoy wisdom
            <br /> of community!</p>
        </div>
        <div>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <img src={stack} />
          </div>
          <p className='font-[Inter-SemiBold] font-bold'>Let somebody else
            <br /> take care of landlord</p>
        </div>
      </div>

      <div className='flex '>
        <div>
          <div className='bg-white rounded-lg shadow-md p-4'><img src={plant} /></div>
          <p className='font-[Inter-SemiBold] font-bold'>Enjoy peaceful
            <br />environment</p>
        </div>
        <div>
          <div className='bg-white rounded-lg shadow-md p-4'> 
           <img src={shield} />
           </div>

          <p className='font-[Inter-SemiBold] font-bold'>Stay safe
            <br />save money</p>
        </div>
        <div>
          <div className='bg-white rounded-lg shadow-md p-4'> <img src={eye} /></div>

          <p className='font-[Inter-SemiBold] font-bold'>Pay for what
            <br /> you use</p>
        </div>
      </div>

    </div>
  )
}

export default smallcards