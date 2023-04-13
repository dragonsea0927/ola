import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, User } from "next-auth";

const authHandler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    session: async ({ session, user }: { session: Session; user: User }) => ({
      ...session,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image
      },
    }),
  }
};
