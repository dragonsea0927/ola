import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { NextAuthOptions, getServerSession } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      id: 'github',
      name: 'GitHub',
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auths/signin',
  },
  callbacks: {
    jwt: async ({ token, profile, account, user, }: any) => {
      if (user && user.idToken) {
        token.idToken = user.idToken;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    session: async ({ session, user, token }: any) => {
      session.user = {
        idToken: token?.idToken,
        userId: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        accessToken: token?.accessToken,
        role: 'admin'
      };
      return session;
    },
  }
}


export const getAuthSession = () => getServerSession(authOptions);
