import client from "@/app/db"
import { NextRequest } from "next/server";


export async function GET() {
  // data fetching
  const user = await client.user.findFirst();

  return Response.json({
    email: user?.username,
    password: user?.password,
    id: user?.id,
  });
}

export async function POST( req: NextRequest ) {
  // extract the body
  const body = await req.json();

  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  })

  // store the bosy into database
  console.log(body);

  return Response.json({
    message: "User created",
  });
}