import { Card, Panel } from "@/components";
import Chart from "@/components/Chart";

export default function Dashboard() {
  return (
    <section className='flex flex-col w-full gap-5'>
      <div className='flex w-full gap-5'>
        <Card type='client' />
        <Card type='agent' />
        <Card type='message' />
      </div>
      <Panel />
      <Chart />
    </section>
  );
}
