import React from "react";

export default function Panel() {
  return (
    <div className='flex flex-col gap-5 p-5 bg-primary text-secondary rounded-2xl'>
      <h1>Ultimos clientes</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Numero</th>
          <th>Accion</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
