import { Flayer } from "@/components";

export default function DashboardLayout({ children }) {
  return (
    <section className='m-5'>
      <div className='flex gap-5'>
        <div className='flex flex-auto w-full'>{children}</div>
        <Flayer className='flex-1' />
      </div>
      <div className='flex justify-between mt-5'>
        <h1 className='stat-title'>RST</h1>
        <h4 className='stat-title'>Reservados todos los derechos.</h4>
      </div>
    </section>
  );
}
