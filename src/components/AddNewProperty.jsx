import React from 'react'
import '../index.css';

function AddNewProperty() {
  return (
    <div className=''>
      Your property with us and be Confident that Your Room will be Filled Out!
      {/* card */}
      <div>
      <h1>Add A New Property</h1>
      <form className='grid grid-cols-3 grid-rows-3 gap-2'>
        <div className=''>
        <label className=''>Name <span className='text-orange-500'>*</span></label><br/>
        <input type="text" className='p-2 border   border-1 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Your Name'></input><br/>
        </div>

        <div>
        <label className=' '>City <span className='text-orange-500'>*</span></label><br/>
        <select className='py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400'><br/>
        <option value="Select your city" >Select Your City</option>
        </select>
        </div>

        <div>
        <label className=' '>Price <span className='text-orange-500'>*</span></label><br/>
        <input type="text" className='p-2 border   border-1 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Price'></input><br/>
        </div>

        <div className=' '>
        <label className=' '>Address <span className='text-orange-500'>*</span></label><br/>
        <input type="text" className='p-2 border   border-1 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Addres'></input><br/>
        </div>

        <div>
        <label className=' '>State <span className='text-orange-500'>*</span></label><br/>
        <select className='py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400'><br/>
        <option value="Select state" >Select State</option>
        </select>
        </div>

        <div>
        <label className=' '>Room <span className='text-orange-500'>*</span></label><br/>
        <select className='py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400'><br/>
        <option value="Select room type" >Select room type</option>
        </select>
        </div>

        <div className=' '>
        <label className=' '>Unit Number <span className='text-orange-500'>*</span></label><br/>
        <input type="text" className='p-2 border   border-1 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Unit'></input><br/>
        </div>

        <div>
        <label className=' '>Room <span className='text-orange-500'>*</span></label><br/>
        <select className='py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400'><br/>
        <option value="Select room type" >Select room type</option>
        </select>
        </div>

        <div  className='col-span-2'>
        <label className=' '>Description <span className='text-orange-500'>*</span></label><br/>
        <input type="text" className='px-96 py-8 border   border-1 border-gray-300 rounded-md bg-gray-100' placeholder='Enter Description'></input><br/>
        </div>

        <div  className='col-span-2'>
        <label className=' '>Upload Photos</label><br/>
        <input type="text" className='px-96 py-8 border border-2 border-orange-300 border-dashed rounded-md' placeholder='Drag your images here,or browse'></input><br/>
        </div>

      </form>
      </div>
   
    
      <div className='py-10'>
                    <a className='btn'>Add New Property</a>
                </div>
    
    </div>
  )
}

export default AddNewProperty