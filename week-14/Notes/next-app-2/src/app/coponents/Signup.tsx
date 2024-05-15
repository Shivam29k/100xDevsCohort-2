"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {signup} from "@/app/actions/user"

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//      axios
//       .post("http://localhost:3000/api/user", { username, password })
//       .then((response) => {
//         // console.log(response.data);
//         router.push("/");
//       });
//   }

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await signup(username, password)
    console.log(res)
    if(res.message === "User created"){
        router.push("/")
    }
 }

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <form
        className="border  p-8 rounded flex flex-col gap-4 hover:bg-slate-100"
        onSubmit={handleSubmit}
      >
        <div>
          <p>Username</p>
          <input
            type="email"
            placeholder="Enter your username"
            className="border rounded p-1 hover:shadow"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            className="border rounded p-1 hover:shadow"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-1 bg-zinc-700 hover:bg-black text-white font-medium  rounded "
        >
          Signup
        </button>
      </form>
    </div>
  );
}
