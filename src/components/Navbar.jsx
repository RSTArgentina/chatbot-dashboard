import React from "react";

export default function navbar() {
  return (
    <div className='flex items-center justify-between p-5 m-5 bg-primary text-secondary rounded-2xl'>
      <h1 className='text-xl font-bold'>Dashboard</h1>
      <label className='flex items-center gap-2 input input-bordered text-neutral'>
        <input type='text' className='grow' placeholder='Search' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='#3A3A45'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
    </div>
  );
}