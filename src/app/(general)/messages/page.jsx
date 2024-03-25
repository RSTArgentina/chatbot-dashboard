"use client";

import { ArrowLeft, ArrowRight, EyeOpen, Pen, Trash } from "@/assets/icons";
import { Filter, PutMessageModal, Search } from "@/components";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { deleteById } from "@/lib/features/message/slice";
import swal from "sweetalert";
import { useState } from "react";
import View from "@/components/View";

export default function Message() {
  const messages = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();
  const [data, setData] = useState();

  const handleDelete = (message) => {
    swal(
      `¿ Seguro que quieres eliminar el mensaje con la referencia ${message.reference} ?`,
      {
        buttons: true,
      }
    ).then((value) => {
      if (value === null) return;
      swal("Mensaje eliminado", " ", "success", {
        buttons: false,
        timer: 1500,
      });
      dispatch(deleteById(message.id));
    });
  };

  return (
    <>
      <div className='flex h-[555px] flex-col gap-5 p-5 m-5 shadow-lg bg-base-100 rounded-2xl text-neutral'>
        <div className='flex'>
          <Search className='flex-1 h-12 ' />
          <div className='flex items-center justify-end flex-1 gap-5 flex-2'>
            <Filter>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </Filter>
            <button
              className='btn-md btn btn-secondary'
              onClick={() => document.getElementById("putMessage").showModal()}
            >
              Agregar Mensaje
            </button>
          </div>
        </div>

        <div className='overflow-auto '>
          <table className='table table-pin-rows'>
            <thead>
              <tr>
                <th>Referencia</th>
                <th>Mensaje</th>
                <th>Creado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {messages &&
                messages.map((message) => (
                  <tr className='hover' key={message.id}>
                    <td>{message.reference}</td>
                    <td>{message.content}</td>
                    <td>{message.createAt}</td>
                    <td className='flex '>
                      <button
                        onClick={() => handleDelete(message)}
                        className='btn btn-ghost btn-circle btn-sm'
                      >
                        <Trash className='[&>path]:fill-neutral' />
                      </button>

                      <button
                        onClick={() => {
                          setData(message);
                          document.getElementById("putMessage").showModal();
                        }}
                        className='btn btn-ghost btn-circle btn-sm'
                      >
                        <Pen className='[&>path]:fill-neutral' />
                      </button>

                      <View data={message} />
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
      <PutMessageModal data={data} />
    </>
  );
}
