"use client";

import { ArrowLeft, ArrowRight, EyeOpen, Pen, Trash } from "@/assets/icons";
import { Search, PutAgentModal, Filter, Modal } from "@/components";
import { deleteById, create } from "@/lib/features/agent/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useState } from "react";
import swal from "sweetalert";
import Form from "./components/Form";

export default function Agents() {
  const agents = useAppSelector((state) => state.agent);
  const dispatch = useAppDispatch();
  const [agent, setAgent] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = (agent) => {
    swal(`¿ Seguro que quieres eliminar a ${agent.name} ${agent.surname} ?`, {
      buttons: true,
    }).then((value) => {
      if (value === null) return;
      swal("Agente eliminado", " ", "success", {
        buttons: false,
        timer: 1500,
      });
      dispatch(deleteById(agent.id));
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
              onClick={() => document.getElementById("putAgent").showModal()}
            >
              Agregar Agente
            </button>
          </div>
        </div>

        <div className='overflow-auto '>
          <table className='table table-pin-rows'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Estado</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Celular</th>
                <th>Creado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr className='hover' key={agent.id}>
                  <td>{agent.name}</td>
                  <td>{agent.surname}</td>
                  <td>{agent.age}</td>
                  <td>
                    <div
                      className={`badge ${
                        agent.active ? "badge-success" : "badge-error"
                      }`}
                    ></div>
                  </td>
                  <td>{agent.email}</td>
                  <td>{agent.rol}</td>
                  <td>{agent.number}</td>
                  <td>{agent.createAt}</td>
                  <td className='flex '>
                    <button
                      onClick={() => handleDelete(agent)}
                      className='btn btn-ghost btn-circle btn-sm'
                    >
                      <Trash className='[&>path]:fill-neutral' />
                    </button>
                    <button
                      onClick={() => {
                        setAgent(agent);
                        document.getElementById("putAgent").showModal();
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

      <Modal id={"putAgent"} title={agent ? "UPDATE AGENTE" : "CREATE AGENTE"}>
        <Form agent={agent} length={agents.length} />
      </Modal>
    </>
  );
}
