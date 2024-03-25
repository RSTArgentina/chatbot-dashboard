"use client";

import { Client, Message, Agent, People } from "@/assets/icons";
import { useAppSelector } from "@/lib/hook";
import Link from "next/link";

// function Icon(props) {
//   if (props.type === "message") {
//     return <Message className='w-6 h-6 [&>path]:fill-neutral' />;
//   } else if (props.type === "agent") {
//     return <Agent className='w-6 h-6 [&>path]:fill-neutral' />;
//   } else {
//     return <Client className='w-6 h-6 [&>path]:fill-neutral' />;
//   }
// }

export default function Card({ type }) {
  const data = useAppSelector((state) => {
    switch (type) {
      case "message":
        return state.message;
      case "agent":
        return state.agent;
      case "client":
        return state.client;
      default:
        return [];
    }
  });

  return (
    <Link
      href={`/${type}s`}
      className='flex justify-start w-full gap-5 p-5 shadow-lg cursor-pointer bg-base-100 text-neutral rounded-2xl hover:bg-base-200 max-h-44'
    >
      {/* <Icon type={type} /> */}
      <People className='w-6 h-6 [&>path]:fill-neutral' />
      <div className='flex flex-col gap-5'>
        <h1>{type.substring(0, 1).toUpperCase() + type.substring(1)}</h1>
        <h3 className='text-xl font-bold'>{data.length}</h3>
        {/* <p>12% more than previous week</p> */}
      </div>
    </Link>
  );
}
