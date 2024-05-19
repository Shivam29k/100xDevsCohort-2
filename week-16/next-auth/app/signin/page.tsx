"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function () {
    // const [authenicaed, setAuthenticated] = useState(false)
  const router = useRouter();
  const session = useSession()
//   session.status === "authenticated" && setAuthenticated(true)

  useEffect(()=>{
    if(session.status == "authenticated"){
      router.push("/")
    }
  }, [session])

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col border rounded-lg p-8">
        <button
          onClick={async () => {
            await signIn("google");

          }}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Login with google
        </button>

        <br />
        <button
          onClick={async () => {
            await signIn("github");
   
          }}
          className="bg-gray-700 text-white p-2 rounded-lg"
        >
          Login with Github
        </button>
        <br />
        <button
          onClick={async () => {
            const res = await signIn("credentials", {
              username: "thisisusername",
              password: "thisispassword",
              redirect: false,
            });
            console.log(res);
            router.push("/");
          }}
            className="bg-white/10 border text-white p-2 rounded-lg"
        >
          Login with email
        </button>
      </div>
    </div>
  );
}
