import { Card, Panel } from "@/components";
import Chart from "@/components/Chart";
export default function Dashboard() {
  return (
    <section className='flex flex-col gap-5'>
      <div className='flex gap-5 '>
        <Card />
        <Card />
        <Card />
      </div>
      <Panel />
      <Chart />
    </section>
  );
}
