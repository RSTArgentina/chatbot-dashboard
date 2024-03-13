import React from "react";

export default function Panel() {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-lg bg-base-100 text-neutral rounded-2xl'>
      <h1>Ultimos clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Numero</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
