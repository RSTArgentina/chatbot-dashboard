"use client";

import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { AddAgentModal, Search } from "@/components";
// import { useEffect, useState } from "react";

export default function Clients() {
  // const { clients, setClients } = useState();

  // const getAllClient = () => {
  //   fetch( "https://api-danielbot.onrender.com/clients")
  //     .then((res) => res.json)
  //     .then((data) => setClients(data))
  //     .catch((err) => console.err(err));
  // };

  // useEffect(() => {
  //   getAllClient();
  // }, []);

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
            {/* {clients.map()} */}
            <tr>
              <td></td>
            </tr>
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
