import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { Session, User } from "next-auth";
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, user }: { session: Session; user: User }) => {
      session.userId = user.id;
      return Promise.resolve(session);
    }
  }
}

export default NextAuth(authOptions);



