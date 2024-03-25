import { Dashboard, Clients, Agents, Message, LogOut } from "@/assets/icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className='sticky top-0 left-0 flex flex-col justify-between h-screen p-2 pb-5 shadow-xl bg-base-100 text-neutral'>
      <div className='flex flex-col gap-5'>
        <Link
          href='/dashboard'
          className='flex flex-col items-center justify-center gap-3'
        >
          <div className='w-full h-20 bg-primary'></div>
          <h1 className='text-xl font-bold'>DEMO NAME</h1>
        </Link>
        <ul className='w-56 menu [&>li>ul>li>a]:gap-5'>
          <li>
            <h2 className='menu-title'>Inicio</h2>
            <ul>
              <li>
                <Link href='/dashboard'>
                  <Dashboard className='w-4 h-4 [&>path]:fill-neutral' />
                  Panel de control
                </Link>
              </li>
              <li>
                <Link href='/clients'>
                  <Clients className='w-4 h-4 [&>path]:fill-neutral' />
                  Clientes
                </Link>
              </li>
              <li>
                <Link href='/agents'>
                  <Agents className='w-4 h-4 [&>path]:fill-neutral' />
                  Agentes
                </Link>
              </li>
              <li>
                <Link href='/messages'>
                  <Message className='w-4 h-4 [&>path]:fill-neutral' />
                  Mensajes
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className='w-56 menu '>
          <li>
            <h2 className='menu-title'>Negocio</h2>
            <ul>
              <li>
                <a>Reportes</a>
              </li>
              <li>
                <a>Campañas</a>
              </li>
              <li>
                <a>Marketing</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Link href='/' className='flex items-center gap-2 pl-5'>
        <LogOut className='w-4 h-4 [&>path]:fill-neutral' />
        Cerrar sesión
      </Link>
    </div>
  );
}
