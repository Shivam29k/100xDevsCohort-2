"use client"


import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


function Appbar() {
  const router = useRouter();
  return (
  <div className="flex justify-between px-8 py-4 bg-zinc-700">
      <div>Learning</div>
      <div className="flex  gap-8">
        <div
          className="hover:font-bold hover:scale-110 cursor-pointer"
          onClick={() => router.push("/signin")}
        >
          Custom Sign In
        </div>
        <div
          className="hover:font-bold hover:scale-110 cursor-pointer"
          onClick={() => signIn()}
        >
          Sign In
        </div>
        <div
          className="hover:font-bold hover:scale-110 cursor-pointer"
          onClick={() => signOut()}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default Appbar;
