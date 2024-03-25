"use client";

import { useAppSelector } from "@/lib/hook";
import Link from "next/link";

export default function Panel() {
  const data = useAppSelector((state) => state.client);

  return (
    <div className='flex flex-col gap-5 p-5 shadow-lg bg-base-100 text-neutral rounded-2xl'>
      <h1>Ultimos clientes</h1>
      <div className='overflow-auto '>
        <table className='table table-pin-rows'>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Numero de celular</th>
              <th>Creado el</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(-5).map((client) => (
              <tr className='hover' key={client.id}>
                <td>{`${client.name} ${client.surname}`}</td>
                <td>{client.number}</td>
                <td>{client.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href='/clients' className='w-full uppercase btn btn-secondary'>
        Tabla clientes
      </Link>
    </div>
  );
}
