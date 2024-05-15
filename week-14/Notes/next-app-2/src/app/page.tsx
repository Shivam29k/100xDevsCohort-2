import axios from "axios";
import Image from "next/image";
import client from "@/app/db";



async function getUserData() {
  const user = await client.user.findFirst();

  return {
    email: user?.username,
    password: user?.password,
    id: user?.id,
  };
}

// async component   -> not available in react.js
export default async function Home() {
  const user = await getUserData();


  return <div className="flex flex-col justify-center h-screen items-center" >
    <div className="border  p-8 rounded flex flex-col gap-2">
      <div >
        Email: {user.email}
      </div>
      <div>
        Password: {user.password}
      </div>
      <div>
        Id: {user.id}
      </div>
    </div>
  </div>;
}
