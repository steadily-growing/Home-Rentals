import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo 1.png'


function Nav() {
return(
    <>
            <div className='p-4 absolute top-0 z-20'>
                <ul className='flex flex-row w-full justify-center'>
                    <div className='flex flex-row justify-evenly '>
                    <div className='pr-32 text-2xl'>
                        <li>
                            <Link to ="/"><img src={logo}/></Link>
                        </li>
                    </div>
                    <div className='px-12' >
                        
                        <li>
                            <Link to="/"><p className=' font-[DM_Sans] text-white'>Home</p></Link>
                        </li>
                    </div>
                    <div className='px-12'>
                        <li>
                            <Link to="/landlord" ><p className=' font-[DM_Sans] text-white'>Landlord</p></Link>
                        </li>
                    </div>
                    <div className=' px-12 '>
                        <li>
                            <Link to="/tenants"><p className=' font-[DM_Sans] text-white'>Tenants</p></Link>
                        </li>
                    </div>
                    <div className=' px-12 '>
                        <li>
                            <Link to="/contactus"><p className=' font-[DM_Sans] text-white'>Contact Us</p></Link>
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