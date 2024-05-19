"use client";

import { useSession } from "next-auth/react";

function ClientSessionInfo() {
  const session = useSession();

  return (
    <div className="text-white w-full min-h-5"> {JSON.stringify(session)}</div>
  );
}

export default ClientSessionInfo;
