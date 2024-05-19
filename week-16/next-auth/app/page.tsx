import Appbar from "@/components/Appbar";
import ClientSessionInfo from "@/components/ClientSessionInfo";
import ServerSessionInfo from "@/components/ServerSessionInfo";
import { useSession } from "next-auth/react";

export default function Home() {

  return (
    <div>
      <Appbar />
      <div className="p-8 flex flex-col gap-8">
        <div>
          <p className="font-bold">CLient Session Info:</p>
          <br />
          <ClientSessionInfo/>
        </div>
        <div>
          <p className="font-bold">Server Session Info:</p>
          <br />
          <ServerSessionInfo/>
        </div>
      </div>
    </div>
  );
}
