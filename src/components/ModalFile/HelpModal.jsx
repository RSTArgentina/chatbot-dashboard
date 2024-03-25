import React from "react";

export default function addAgentModal() {
  return (
    <dialog id='helpModal' className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-neutral'>
            ✕
          </button>
        </form>
        <h1 className='card-title'>AYUDA</h1>
        <form className='flex flex-col gap-5 py-5'>
          {/* <button type='submit' className='btn btn-secondary'>
            Guardar
          </button> */}
        </form>
      </div>
    </dialog>
  );
}
