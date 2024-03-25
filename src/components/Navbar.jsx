"use client";

import { Search, Switch, Setting, Help } from ".";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='flex items-center justify-between p-5 m-5 shadow-lg bg-base-100 text-neutral rounded-2xl'>
      <Title pathname={pathname} />
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

const Title = (props) => {
  switch (props.pathname) {
    case "/messages":
      return <h1 className='text-xl font-bold'>Mensages</h1>;
    case "/agents":
      return <h1 className='text-xl font-bold'>Agentes</h1>;
    case "/clients":
      return <h1 className='text-xl font-bold'>Clientes</h1>;
    default:
      return <h1 className='text-xl font-bold'>Panel de control</h1>;
  }
};
