import { People } from "@/assets/icons";

export default function Card() {
  return (
    <div className='flex justify-start gap-5 p-5 shadow-lg cursor-pointer bg-base-100 text-neutral rounded-2xl hover:bg-base-200 max-h-44'>
      <People className='min-w-5 min-h-5 [&>path]:fill-neutral' />
      <div className='flex flex-col gap-5'>
        <h1>Total Users</h1>
        <h3 className='text-xl font-bold'>10.274</h3>
        <p>12% more than previous week</p>
      </div>
    </div>
  );
}
