import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

async function ServerSessionInfo() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div className="text-white w-full min-h-5"> {JSON.stringify(session)}</div>
  );
}

export default ServerSessionInfo;
