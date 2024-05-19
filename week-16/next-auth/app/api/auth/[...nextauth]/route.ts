import { NEXT_AUTH } from "@/app/lib/auth";
import { GOOGLE_GIT_NEXT_AUTH } from "@/app/lib/google-and-git-auth";

import NextAuth from "next-auth";

// const handler = NextAuth(NEXT_AUTH);
const handler = NextAuth(GOOGLE_GIT_NEXT_AUTH);

export const GET = handler;
export const POST = handler;
