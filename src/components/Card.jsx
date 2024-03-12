import { People } from "@/assets/icons";

export default function Card() {
  return (
    <div className='flex justify-start gap-5 p-5 bg-primary text-secondary rounded-2xl hover:bg-yellow-300 max-h-44'>
      <People className='min-w-5 min-h-5 ' />
      <div className='flex flex-col gap-5'>
        <h1>Total Users</h1>
        <h3 className='text-xl font-bold'>10.274</h3>
        <p>12% more than previous week</p>
      </div>
    </div>
  );
}
