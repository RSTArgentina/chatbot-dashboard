"use client";

import { useFormik } from "formik";
import { ZodError, z } from "zod";
import { useRouter } from "next/navigation";
import { logOut, logIn } from "@/lib/features/auth/slice"
import { useAppDispatch, useAppSelector } from "@/lib/hook"

import axios from "axios";


export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  //const auth = useAppSelector((state) => state.auth.accessToken);

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
      onSubmit: async (values) => {
        const username = values.username;
        const password = values.password;
        console.log("values");
        console.log(values);
        console.log(username, password);
        try {

          const response = await axios.post('https://api-danielbot.onrender.com/auth/login', { username, password });

          console.log(response);
          if (response.status === 200) {
            // Inicio de sesión exitoso, redirigir al usuario a la página de dashboard
            router.push("/dashboard");
          } else {
            // Inicio de sesión fallido, mostrar mensaje de error

            console.error("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert("Error al iniciar sesión", error.message)
        }

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
          className={`input input-bordered text-neutral ${errors.username && touched.username && "border-red-600 border-2"
            }`}
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type='password'
          name='password'
          placeholder='Ingrese su contraseña'
          className={`input input-bordered text-neutral ${errors.password && touched.password && "border-red-600 border-2"
            }`}
        />

        <button className='w-full btn btn-secondary' type='submit'>
          Login
        </button>
      </form>
    </div>

  );
}
