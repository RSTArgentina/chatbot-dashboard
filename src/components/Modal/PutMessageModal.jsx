"use client";

import { create } from "@/lib/features/message/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useFormik } from "formik";

export default function PutMessageModal({ data }) {
  const messages = useAppSelector((state) => state.message);
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

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      id: data?.id ?? messages.length + 1,
      reference: data?.reference ?? "",
      content: data?.content ?? "",
      createAt: data?.createAt ?? formatDate(),
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
      resetForm();
    },
  });

  return (
    <dialog id='putMessage' className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-neutral'>
            ✕
          </button>
        </form>
        {data ? <h1>UPDATE</h1> : <h1>CREATE</h1>}
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 py-5 text-neutral'
        >
          <input
            value={values.reference}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='reference'
            placeholder='Referencia'
            className='w-full input input-bordered'
          />

          <input
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='content'
            placeholder='Contenido'
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
