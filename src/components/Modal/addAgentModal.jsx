"use client";

import { create } from "@/lib/features/client/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useFormik } from "formik";

export default function AddAgentModal() {
  const clients = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  // const userSchema = z.object({
  //   username: z
  //     .string({ required_error: "Campo requerido" })
  //     .min(1, { message: "Este caso debe ser completado" }),
  //   password: z
  //     .string({ required_error: "Campo requerido" })
  //     .min(1, { message: "Este caso debe ser completado" }),
  // });

  function formatDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // Getting the last two digits of the year

    return `${day}/${month}/${year}`;
  }

  const id = clients.length + 1;
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        id: id,
        name: "",
        surname: "",
        age: 0,
        active: true,
        number: 0,
        createAt: formatDate(),
      },
      // validate: (values) => {
      //   try {
      //     userSchema.parse(values);
      //   } catch (errors) {
      //     if (errors instanceof ZodError) return errors.issues;
      //   }
      // },
      onSubmit: (values) => {
        dispatch(create(values));
      },
    });

  return (
    <dialog id='addAgent' className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-neutral'>
            ✕
          </button>
        </form>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 py-5'>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='name'
            placeholder='Nombre'
            className='w-full input input-bordered'
          />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            type='text'
            name='surname'
            placeholder='Apellido'
            className='w-full input input-bordered'
          />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            type='number'
            name='age'
            placeholder='Edad'
            className='w-full input input-bordered'
          />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
            type='number'
            name='number'
            placeholder='Numero de celular'
            className='w-full input input-bordered'
          />

          <button type='submit' className='btn btn-secondary'>
            Guardar
          </button>
        </form>
      </div>
    </dialog>
  );
}
