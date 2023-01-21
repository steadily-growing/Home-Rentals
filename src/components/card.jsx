import React from 'react'
import property1 from '../assets/property1.png'
import property2 from '../assets/property2.png'
import property3 from '../assets/property3.png'
import property4 from '../assets/property4.png'
import property5 from '../assets/property5.png'
import property6 from '../assets/property6.png'

function card() {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property1} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property2} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property3} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>


            </div>
            <div className='flex flex-row justify-between my-16'>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property4} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property5} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-md w-60 oveflow-hidden mx-10'>
                    <img src={property6} />
                    <div className='flex flex-col px-2'>
                        <span className='font-[DMSans-Bold] font-bold'>
                            2578 Folsom Street,<br /> San Francisco, CA, 94110
                        </span>
                        <span className='font-[DMSans-Regular] text-gray-400 text-sm' >Private Room</span>
                        <span className='font-[DMSans-Bold] text-orange-600 font-bold'>$1200/month</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default card