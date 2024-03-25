"use client";

import { create } from "@/lib/features/agent/slice";
import { useAppDispatch } from "@/lib/hook";
import { useFormik } from "formik";

export default function Form({ agent, length }) {
  const dispatch = useAppDispatch();
  //   console.log(agent);

  function formatDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // Getting the last two digits of the year

    return `${day}/${month}/${year}`;
  }

  const initialValues = {
    id: agent?.id ?? length + 1,
    name: agent?.name ?? "",
    surname: agent?.surname ?? "",
    age: agent?.age ?? 0,
    active: agent?.active ?? true,
    email: agent?.email ?? "",
    rol: agent?.rol ?? "",
    number: agent?.number ?? 0,
    createAt: agent?.createAt ?? formatDate(),
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
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
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 py-5 text-neutral'
    >
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
        value={values.email}
        type='mail'
        name='email'
        placeholder='Email'
        className='w-full input input-bordered'
      />
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rol}
        type='text'
        name='rol'
        placeholder='Rol'
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
  );
}
