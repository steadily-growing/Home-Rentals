import React from 'react'

function pagination() {
    return (
        <div className='flex space-evenly justify-center border border-gray-300 rounded bg-white mx-10'>
            <div className='bg-gray-100 border-r p-4'><p className='text-gray-300'>First</p></div>
            <div className=' border-r p-4'>   1 </div>
            <div className='bg-orange-600 border-r '><p className='p-5 text-white'>2</p></div>
            <div className='bg-white border-r'><p className='p-4 '>3</p></div>
            <div className='bg-white '><p className='p-4 '>Next</p> </div>
            
        </div>
    )
}

export default pagination