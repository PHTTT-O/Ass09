import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import  userLogIn  from "@/libs/userLogIn";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text",  placeholder: "email"},
        password: { label: "Password", type: "password", placeholder: "password" },
      },

      async authorize(credentials) {
        try {
          const data:any = await userLogIn(
            credentials!.email,
            credentials!.password
          );

          return {
            id: data.data._id,
            name: data.data.name,
            email: data.data.email,
            role: data.data.role,
            token: data.token,
          };
        } catch {
          return null;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token._id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = u.role;
        token.accessToken = u.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        _id: token._id as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        token: token.accessToken as string,
      };

      return session;
    },
  },
});

export { handler as GET, handler as POST };