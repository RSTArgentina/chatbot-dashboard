import { EyeOpen } from "@/assets/icons";

export default function View({ data }) {
  return (
    <div className=' drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn btn-ghost btn-circle btn-sm'>
          <EyeOpen className='[&>path]:fill-neutral' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div className='min-h-full p-4 menu w-80 bg-base-200 text-neutral'>
          <h1>{data.reference}</h1>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
