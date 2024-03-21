import { Filter as FilterIcon } from "@/assets/icons";

export default function Filter({ children }) {
  return (
    <details className='dropdown'>
      <summary className='m-1 btn'>
        <FilterIcon className='[&>path]:fill-neutral' />
        Filter
        {/* <label className='swap swap-rotate'>
                  <input id='arrow' type='checkbox' />
                  <ArrowDown className='[&>path]:fill-neutral swap-on' />
                  <ArrowUp className='[&>path]:fill-neutral swap-off' />
                </label> */}
      </summary>
      <ul
        tabIndex={0}
        className='z-10 p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52'
      >
        {children}
      </ul>
    </details>
  );
}
