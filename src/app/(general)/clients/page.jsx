"use client";

import { ArrowLeft, ArrowRight, ArrowUp } from "@/assets/icons";
import { PutClientModal, Search } from "@/components";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { Trash, Pen, EyeOpen, Filter, ArrowDown } from "@/assets/icons";
import { deleteById } from "@/lib/features/client/slice";
import swal from "sweetalert";
import { useState } from "react";

export default function Clients() {
  const clients = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchClients());
  // }, []);


  const handleDelete = (client) => {
    swal(`¿ Seguro que quieres eliminar a ${client.name} ${client.surname} ?`, {
      buttons: true,
    }).then((value) => {
      if (value === null) return;
      swal("Cliente eliminado", " ", "success", {
        buttons: false,
        timer: 1500,
      });
      dispatch(deleteById(client.id));
    });
  };

  return (
    <>
      <div className='flex flex-col h-[555px] gap-5 p-5 m-5 shadow-lg bg-base-100 rounded-2xl text-neutral'>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <Search className='h-12' />

            <details className='dropdown'>
              <summary className='m-1 btn'>
                <Filter className='[&>path]:fill-neutral' />
                Filter
                {/* <label className='swap swap-rotate'>
                  <input id='arrow' type='checkbox' />
                  <ArrowDown className='[&>path]:fill-neutral swap-on' />
                  <ArrowUp className='[&>path]:fill-neutral swap-off' />
                </label> */}
              </summary>
              <ul
                tabIndex={0}
                className='z-10 p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
          <button
            className='btn-md btn btn-secondary'
            onClick={() => document.getElementById("putClient").showModal()}
          >
            Agregar Cliente
          </button>
        </div>


        <div className='overflow-auto '>
          <table className='table table-pin-rows'>
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
                        onClick={() => handleDelete(client)}
                        className='btn btn-ghost btn-circle btn-sm'
                      >
                        <Trash className='[&>path]:fill-neutral' />
                      </button>
                      <button
                        onClick={() => {
                          setData(client);
                          document.getElementById("putClient").showModal();
                        }}
                        className='btn btn-ghost btn-circle btn-sm'
                      >
                        <Pen className='[&>path]:fill-neutral' />
                      </button>
                      <button className='btn btn-ghost btn-circle btn-sm'>
                        <EyeOpen className='[&>path]:fill-neutral' />
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

      <PutClientModal data={data} />
    </>
  );
}
