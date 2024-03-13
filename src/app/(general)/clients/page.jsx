import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { Search } from "@/components";
import React from "react";

export default function Clients() {
  return (
    <div className='flex flex-col gap-5 p-5 m-5 shadow-lg bg-base-100 rounded-2xl text-primary'>
      <div className='flex justify-between'>
        <Search className='h-12' />
        <button className='btn-md btn-disabled btn btn-secondary'>
          Agregar Cliente
        </button>
      </div>

      <table className='w-full'>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>

      <div className='flex justify-end gap-5'>
        <ArrowLeft />
        <ArrowRight />
      </div>
    </div>
  );
}
