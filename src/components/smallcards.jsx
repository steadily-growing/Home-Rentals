import React from 'react'
import money from '../assets/money.png'
import house from '../assets/house.png'
import stack from '../assets/stack.png'
import plant from '../assets/plant.png'
import shield from '../assets/shield.png'
import eye from '../assets/eye.png'

function smallcards(){
  return (
    <div className='flex flex-col w-[40%] justify-center items-center'>
      <div className='flex flex-row justify-between w-[100%] '>
        <div className='w-[20%]'> 
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'>
            <img src={money} />
          </div>
          <p className='font-[Inter-SemiBold] font-bold '>Pay as little
            <br /> as possible</p>
        </div>
        <div className='w-[20%]'>
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'>
            <img src={house} />
          </div>
          <p className='font-[Inter-SemiBold] font-bold'>Enjoy wisdom
            <br /> of community!</p>
        </div>
        <div className='w-[20%]'>
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'>
            <img src={stack} />
          </div>
          <span className='font-[Inter-SemiBold] font-bold '>Let somebody else take care of landlord</span>
        </div>
      </div>

      <div className='flex justify-between w-[100%] '>
        <div className='w-[20%]'>
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'><img src={plant} /></div>
          <p className='font-[Inter-SemiBold] font-bold'>Enjoy peaceful
            <br />environment</p>
        </div>
        <div className='w-[20%]'>
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'> 
           <img src={shield} />
           </div>

          <p className='font-[Inter-SemiBold] font-bold'>Stay safe
            <br />save money</p>
        </div>
        <div className='w-[20%]'>
          <div className='bg-white rounded-lg shadow-md p-4 flex justify-center items-center'> <img src={eye} /></div>

          <p className='font-[Inter-SemiBold] font-bold'>Pay for what
            <br /> you use</p>
        </div>
      </div>
    </div>
  )
}

export default smallcards