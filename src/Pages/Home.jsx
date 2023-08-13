import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='border relative bg-slate-200 px-6 py-10 h-[500px] w-2/5 mx-auto rounded-2xl'>
            <form className='absolute bottom-5 left-4'>
<h1 className='text-2xl font-bold px-4 mt-20'>Welcome To Pops</h1>
<p className='px-4 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quo.</p>
<Link to="/register"><button className='btn  bg-pink-500 py-2 w-full my-4 rounded-2xl'>Create A Account</button></Link>
<Link to="/login"><button className='btn  bg-slate-400 py-2 w-full rounded-2xl'>Already Registered?Login</button></Link>

            </form>
        </div>
    );
};

export default Home;