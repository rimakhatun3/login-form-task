import React from 'react';

const Account = () => {
    return (
        <div className='border bg-slate-200 w-2/5 mx-auto h-[500px] relative'>
            <p className='bg-white px-4 py-3'>Account Setting</p>
<div className='flex justify-start items-center gap-2 mx-2 mt-4'>
            <div className=' rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

              </div>
              <div className=''>
                <h1 className='text-2xl font-bold'>Mary Doe</h1>
                <p>mary@gmail.com</p>
              </div>
            </div>
            <p className='px-4 mt-2 mb-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum aspernatur ad vel beatae laboriosam placeat ab pariatur dolorem aliquid enim, eos porro provident eum illo accusamus quisquam incidunt excepturi?</p>
            <div className='divider'></div>
            <div className='divider mt-44'></div>
            
        </div>
    );
};

export default Account;