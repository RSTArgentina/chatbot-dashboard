"use client";

import { Search, Switch, Setting, Help } from ".";
import { usePathname } from "next/navigation";

export default function navbar() {
  const pathname = usePathname();

  return (
    <div className='flex items-center justify-between p-5 m-5 shadow-lg bg-base-100 text-neutral rounded-2xl'>
      <h1 className='text-xl font-bold'>
        {pathname.substring(1, 2).toUpperCase() + pathname.slice(2)}
      </h1>

      <div className='flex items-center gap-5'>
        <Search className='h-10' />
        <Switch />
        <Setting className='w-6 h-6 [&>path]:fill-neutral' />
        <Help className='w-6 h-6 [&>path]:fill-neutral' />
        {/* <WhatsApp className='w-7 h-7' /> */}
      </div>
    </div>
  );
}
