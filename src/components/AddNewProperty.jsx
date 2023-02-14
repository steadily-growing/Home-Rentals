import React from 'react'
import '../index.css';

function AddNewProperty() {
  return (
    <div className=''>
      Your property with us and be Confident that Your Room will be Filled Out!
      {/* card */}
      <div>
      <h1>Add A New Property</h1>
      <form className='grid grid-cols-3 grid-rows-3 gap-10'>
        <div className=''>
        <label className=''>Name <span className='text-orange-500'>*</span></label>
        <input type="text" className='p-2 border boreder-4 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Your Name'></input>

        <label className=' '>City <span className='text-orange-500'>*</span></label>
        <select className='py-2 px-8 border boreder-4 border-gray-300 rounded-md bg-gray-100 text-gray-400'>
        <option value="Select your city" >Select Your City</option>
        </select>

        <label className=' '>Price <span className='text-orange-500'>*</span></label>
        <input type="text" className='p-2 border boreder-4 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Price'></input>
        </div>

        <div className=' '>
        <label className=' '>Address <span className='text-orange-500'>*</span></label>
        <input type="text" className='p-2 border boreder-4 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Addres'></input>

        <label className=' '>State <span className='text-orange-500'>*</span></label>
        <select className='py-2 px-8 border boreder-4 border-gray-300 rounded-md bg-gray-100 text-gray-400'>
        <option value="Select state" >Select State</option>
        </select>

        <label className=' '>Room <span className='text-orange-500'>*</span></label>
        <select className='py-2 px-8 border boreder-4 border-gray-300 rounded-md bg-gray-100 text-gray-400'>
        <option value="Select room type" >Select room type</option>
        </select>
        </div>

        <div className=' '>
        <label className=' '>Unit Number <span className='text-orange-500'>*</span></label>
        <input type="text" className='p-2 border boreder-4 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Unit'></input>

        <label className=' '>Room <span className='text-orange-500'>*</span></label>
        <select className='py-2 px-8 border boreder-4 border-gray-300 rounded-md bg-gray-100 text-gray-400'>
        <option value="Select room type" >Select room type</option>
        </select>

        <label className=' '>Room <span className='text-orange-500'>*</span></label>
        <select className='py-2 px-8 border boreder-4 border-gray-300 rounded-md bg-gray-100 text-gray-400'>
        <option value="Select room type" >Select room type</option>
        </select>

        
        </div>

      </form>
      </div>
   
      <div>

      </div>
    </div>
  )
}

export default AddNewProperty