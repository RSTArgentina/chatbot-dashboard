"use client";

import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { PutClientModal, Search } from "@/components";

export default function Message() {
  return (
    <>
      <div className='flex flex-col gap-5 p-5 m-5 shadow-lg bg-base-100 rounded-2xl text-neutral'>
        <div className='flex justify-between'>
          <Search className='h-12' />
          <button
            className='btn-md btn btn-secondary'
            onClick={() => document.getElementById("addAgent").showModal()}
          >
            Agregar Mensaje
          </button>
        </div>

        <table className='w-full'>
          <thead>
            <tr>
              <th>Referencia</th>
              <th>Mensaje</th>
              <th>Creado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
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
      <PutClientModal />
    </>
  );
}
