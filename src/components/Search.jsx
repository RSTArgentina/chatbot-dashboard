'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchInput({ className }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("q", e.target.value)

    replace(`${pathname}?${params}`)
  }


  console.log("Search component:");
  console.log(searchParams);
  console.log(pathname);



  return (
    <label
      className={`flex ${className} items-center gap-2 input input-bordered text-neutral`}
      id='search'
    >
      <input type='text' name='search' className='grow' placeholder='Search' onChange={handleSearch} />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='w-4 h-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  );
}
