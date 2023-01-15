import React from 'react'
import { Outlet, Link } from "react-router-dom";

function nav() {

    <>
            <div className='p-4'>
                <ul className='flex flex-row  w-full justify-center'>
                    <div className='flex flex-row justify-evenly '>
                    <div className='pr-32 text-2xl'>
                        <li>
                            <Link to ="/">ARTSY.</Link>
                        </li>
                    </div>
                    <div className=' hover:underline px-12' >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    <div className='hover:underline px-12'>
                        <li>
                            <Link to="/auctions">Auction</Link>
                        </li>
                    </div>
                    <div className='hover:underline px-12 '>
                        <li>
                            <Link to="/market">Market</Link>
                        </li>
                    </div>
                    <div className=' hover:underline px-12 '>
                        <li>
                            <Link to="/drop">Drop</Link>
                        </li>
                    </div>
                    
                    </div>

                    <div className='flex flex-row justify-end '>
                
                    </div>
                </ul>

            </div>

            <Outlet />
        </>
                                                                                   
}

export default nav