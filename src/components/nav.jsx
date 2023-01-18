import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo 1.png'

function Nav() {
return(
    <>
            <div className='p-4'>
                <ul className='flex flex-row  w-full justify-center'>
                    <div className='flex flex-row justify-evenly '>
                    <div className='pr-32 text-2xl'>
                        <li>
                            <Link to ="/"><img src={logo}/></Link>
                        </li>
                    </div>
                    <div className=' hover:underline px-12' >
                        
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    <div className='hover:underline px-12'>
                        <li>
                            <Link to="/landlord">Landlord</Link>
                        </li>
                    </div>
                    <div className='hover:underline px-12 '>
                        <li>
                            <Link to="/tenants">Tenants</Link>
                        </li>
                    </div>
                    <div className=' hover:underline px-12 '>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </div>
                    
                    </div>
                    
                </ul>

            </div>

            <Outlet />
        </>

)
                                                                                   
}

export default Nav