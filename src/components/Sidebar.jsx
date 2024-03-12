import { Dashboard, Clients, Agents, Message, LogOut } from "@/assets/icons";

export default function Sidebar() {
  return (
    <div className='sticky top-0 left-0 flex flex-col justify-between h-screen p-2 pb-5 bg-primary text-secondary'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='w-full h-20 bg-secondary'></div>
          <h1 className='text-xl font-bold'>DEMO NAME</h1>
        </div>
        <ul className='w-56 menu [&>li>ul>li>a]:gap-5'>
          <li>
            <h2 className='menu-title'>Inicio</h2>
            <ul>
              <li>
                <a>
                  <Dashboard className='w-4 h-4' />
                  Dashboard
                </a>
              </li>
              <li>
                <a>
                  <Clients className='w-4 h-4' />
                  Clientes
                </a>
              </li>
              <li>
                <a>
                  <Agents className='w-4 h-4' />
                  Agentes
                </a>
              </li>
              <li>
                <a>
                  <Message className='w-4 h-4' />
                  Mensajes
                </a>
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

      <a className='flex items-center gap-2 pl-5'>
        <LogOut className='w-4 h-4' />
        Cerrar sesión
      </a>
    </div>
  );
}
