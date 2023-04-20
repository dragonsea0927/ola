import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '../../../../types/appTypes'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Session } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session: Session = await getServerSession(req, res, authOptions) as Session

  try {
    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag }: Project = req.body;
    const project = {
      name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag,
    };

    if (!session?.user?.email) {
      return res.status(401).json({
        status: "error",
        message: "You are not authorized to perform this action"
      })

    }

    const result = await prisma.project.create({
      data: {
        ...project,
        author: {
          connect: {
            email: session?.user?.email as string
          }
        }
      }
    });

    res.status(200).json({
      status: "success",
      data: result,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
      message: `Error adding project to database ${error}`,
    });
  }
}
