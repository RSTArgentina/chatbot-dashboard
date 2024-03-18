import React from "react";

export default function addAgentModal() {
  return (
    <dialog id='addAgent' className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-neutral'>
            ✕
          </button>
        </form>
        <form className='flex flex-col gap-5 py-5'>
          <label className='flex items-center gap-2 input input-bordered'>
            <input type='text' className='grow' placeholder='Email' />
          </label>
          <label className='flex items-center gap-2 input input-bordered'>
            <input type='text' className='grow' placeholder='Username' />
          </label>
          <label className='flex items-center gap-2 input input-bordered'>
            <input type='password' className='grow' placeholder='Password' />
          </label>

          <button type='submit' className='btn btn-secondary'>
            Guardar
          </button>
        </form>
      </div>
    </dialog>
  );
}
