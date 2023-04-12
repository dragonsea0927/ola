import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '../../../../types/appTypes'
import prisma from '@/lib/prisma'
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  try {
    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, userId }: Project = req.body;
    const project = {
      name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag,
      userId
    };

    console.log(session?.user?.email)

    if (!session?.user?.email) {
      res.status(401).json({
        status: "error",
        message: "You must be logged in to add a project",
      });
      return;
    }

    const result = await prisma.project.create({
      data: {
        ...project,
        user: {
          connect: { id: userId },
        }
      },
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
