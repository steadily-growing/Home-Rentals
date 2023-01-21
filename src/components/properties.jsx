import React from 'react'
import '../index.css';
import Card from '../components/card'

function properties() {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='flex flex-row justify-between'>
            <div className='px-10'>
                <p className='text-3xl font-[Inter-ExtraBold] font-bold pb-2'>List Of Properties</p>
                <hr className="border-2 border-orange-600 w-20 mb-10" />
            </div>
            <div className='px-10'>
                <a className='btn'> View All Properties</a>
            </div>

            </div>
            {/* cards */}
            <Card/>


        </div>
    )
}

export default properties