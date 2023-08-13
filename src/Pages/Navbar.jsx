import React from 'react';
import reactLogo from '../assets/react.svg'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            {/* <div className='flex flex-col justify-center items-center'>
            <img className='w-28 mt-20 mb-5' src={reactLogo } alt="" />
            <h1 className='text-5xl font-bold '>Basic Login Form</h1>
            
            </div> */}
<div className='flex justify-center items-center gap-4 border py-2 px-8 bg-pink-400 rounded-2xl w-2/5 my-6 mx-auto'>

    <NavLink to="/"><button className='bg-sky-400 py-2 px-6 rounded-2xl hover:bg-sky-600 '>Home</button></NavLink>
    <NavLink to="/login"><button className='bg-sky-400 py-2 px-6 rounded-2xl hover:bg-sky-600 '>Login</button></NavLink>
    <NavLink to="/register"><button className='bg-sky-400 py-2 px-6 rounded-2xl hover:bg-sky-600 '>Registration</button></NavLink>
    <NavLink to="/account"><button className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </button></NavLink>

</div>

        </div>
    );
};

export default Navbar;