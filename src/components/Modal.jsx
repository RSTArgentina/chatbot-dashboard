export default function Modal({ id, title, children }) {
  return (
    <dialog id={id} className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-neutral'>
            ✕
          </button>
        </form>
        <div className='flex flex-col gap-5 text-neutral'>
          {title}
          {children}
        </div>
      </div>
    </dialog>
  );
}
