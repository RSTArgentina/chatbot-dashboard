import { fetchClients } from "@/app/lib/data";
import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { AddAgentModal, Search } from "@/components";
// import { useEffect, useState } from "react";

export default async function Clients() {
  
    const clients = await fetchClients();
    console.log(clients);

  return (
    <>
      <div className='flex flex-col gap-5 p-5 m-5 shadow-lg bg-base-100 rounded-2xl text-neutral'>
        <div className='flex justify-between'>
          <Search className='h-12' />
          <button
            className='btn-md btn btn-secondary'
            onClick={() => document.getElementById("addAgent").showModal()}
          >
            Agregar Cliente
          </button>
        </div>

      <table className='w-full'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Creado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.data.map((client) => (
            <tr key={client.id}>
              <td>{client.username}</td>
              <td>{client.phone}</td>
              <td>Creado</td> {/* CAMBIAR A CREATED_IN CUANDO ESTÉ CREADO EN LA API */}
              <td>{client.action}</td>

            </tr>
          ))}

        </tbody>
      </table>

        <div className='flex justify-end gap-5'>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <AddAgentModal />
    </>
  );
}
