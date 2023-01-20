import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo 1.png'


function Nav() {
return(
    <>
            <div className='p-4 absolute'>
                <ul className='flex flex-row w-full justify-center'>
                    <div className='flex flex-row justify-evenly '>
                    <div className='pr-32 text-2xl'>
                        <li>
                            <Link to ="/"><img src={logo}/></Link>
                        </li>
                    </div>
                    <div className='px-12' >
                        
                        <li>
                            <Link to="/"><p className='text-white'>Home</p></Link>
                        </li>
                    </div>
                    <div className='px-12'>
                        <li>
                            <Link to="/landlord" ><p className='text-white'>Landlord</p></Link>
                        </li>
                    </div>
                    <div className=' px-12 '>
                        <li>
                            <Link to="/tenants"><p className='text-white'>Tenants</p></Link>
                        </li>
                    </div>
                    <div className=' px-12 '>
                        <li>
                            <Link to="/contactus"><p className='text-white'>Contact Us</p></Link>
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