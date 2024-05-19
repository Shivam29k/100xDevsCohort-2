import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // user verification logic
        const user =
          credentials?.username == "shivam" && credentials.password == "696969"
            ? {
                id: "1",
                name: "Shivam Kumar",
                email: "shivamkk@gmail.com",
                username: "shivam",
              }
            : null;
        if (user) {
          // by default in next-auth only includes the user object with name, email, and image properties.
          // If you want to include additional user properties like username and fullName in the session, you need to use the session callback.
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // use jwt callback to include additional properties in the JWT token
    // jwt: ({token, user})=>{
    //   console.log(token);
    //   token.userId = token.sub;
    //   return token;
    // },

    // use session callback to include additional properties in the session object that is returned to the client
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
        session.user.username = "shivam";
      }
      return session;
    },
  },

//   if i want to redirect to a custom page after sign in, i can use the pages object
  pages: {
    signIn: "/signin",
  }
};
