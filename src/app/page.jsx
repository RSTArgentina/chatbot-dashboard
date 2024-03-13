"use client";

import { useFormik } from "formik";
import { ZodError, z } from "zod";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const userSchema = z.object({
    username: z
      .string({ required_error: "Campo requerido" })
      .min(1, { message: "Este caso debe ser completado" }),
    password: z
      .string({ required_error: "Campo requerido" })
      .min(1, { message: "Este caso debe ser completado" }),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validate: (values) => {
        try {
          userSchema.parse(values);
        } catch (errors) {
          if (errors instanceof ZodError) return errors.issues;
        }
      },
      onSubmit: (values) => {
        router.push("/dashboard");
      },
    });

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-base-300'>
      <form
        className='flex flex-col items-center gap-5 p-10 bg-primary rounded-2xl form-control'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold text-secondary'>Iniciar sesión</h1>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          type='text'
          name='username'
          placeholder='Ingrese su nombre de usuario'
          className={`input input-bordered text-neutral ${
            errors.username && touched.username && "border-red-600 border-2"
          }`}
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type='password'
          name='password'
          placeholder='Ingrese su contraseña'
          className={`input input-bordered text-neutral ${
            errors.password && touched.password && "border-red-600 border-2"
          }`}
        />

        <button className='w-full btn btn-secondary' type='submit'>
          Login
        </button>
      </form>
    </div>

    // <main className='flex items-center justify-center w-screen h-screen bg-base-200'>
    //   <div className='flex flex-col items-center gap-5 p-10 bg-primary rounded-2xl'>
    //     <h1 className='text-2xl font-bold text-secondary'>Iniciar sesión</h1>
    //     <form className='gap-5 form-control' action=''>
    //       <input className='input input-bordered' type='text' />
    //       <input className='input input-bordered' type='text' />
    //       <button className='btn btn-secondary'>Iniciar sesión</button>
    //     </form>
    //   </div>
    // </main>
  );
}
