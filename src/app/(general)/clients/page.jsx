"use client";

import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { AddAgentModal, Search } from "@/components";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { Trash, Pen, Eye } from "@/assets/icons";
import { deleteById, fetchClients } from "@/lib/features/client/slice";
import { useEffect } from "react";

export default function Clients() {
  const clients = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

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

        <div className='overflow-x-auto'>
          <table className='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Activo</th>
                <th>Telefono</th>
                <th>Creado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients &&
                clients.map((client) => (
                  <tr className='hover' key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.surname}</td>
                    <td>{client.age}</td>
                    <td>
                      <div
                        className={`badge ${
                          client.active ? "badge-success" : "badge-error"
                        }`}
                      ></div>
                    </td>
                    <td>{client.number}</td>
                    <td>{client.createAt}</td>
                    <td className='flex '>
                      <button
                        onClick={() => dispatch(deleteById(client.id))}
                        className='btn btn-ghost btn-circle btn-sm'
                      >
                        <Trash className='[&>path]:fill-neutral' />
                      </button>
                      <button className='btn btn-ghost btn-circle btn-sm'>
                        <Pen className='[&>path]:fill-neutral' />
                      </button>
                      <button className='btn btn-ghost btn-circle btn-sm'>
                        <Eye className='[&>path]:fill-neutral' />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className='flex justify-end gap-5'>
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <AddAgentModal />
    </>
  );
}
