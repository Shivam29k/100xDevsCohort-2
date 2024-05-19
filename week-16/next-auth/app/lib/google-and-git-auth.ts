import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const GOOGLE_GIT_NEXT_AUTH = {
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
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
        session.user.username = "shivam";
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  }
};
