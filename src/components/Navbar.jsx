import { Help, Setting, WhatsApp } from "@/assets/icons";
import { Search, Switch } from ".";

export default function navbar() {
  return (
    <div className='flex items-center justify-between p-5 m-5 bg-primary text-secondary rounded-2xl'>
      <h1 className='text-xl font-bold'>Dashboard</h1>

      <div className='flex items-center gap-5'>
        <Search />
        <Switch />
        <Setting className='w-6 h-6' />
        <Help className='w-6 h-6' />
        {/* <WhatsApp className='w-7 h-7' /> */}
      </div>
    </div>
  );
}
