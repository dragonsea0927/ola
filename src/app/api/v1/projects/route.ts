import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';
import { getAuthSession } from '@/utils/auth';
import { Project } from '@/types'

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const result = await prisma.project.findMany({
      orderBy: [
        { createdAt: 'desc' },
        { updatedAt: 'desc' },
      ],

      where: {
        tag: {
          contains: req.query.tag as string,
        },
      },

      select: {
        id: true,
        name: true,
        description: true,
        stacks: true,
        githubUrl: true,
        liveUrl: true,
        coverImgUrl: true,
        modalImgUrl: true,
        tag: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    res.status(200).json({
      nHits: result.length,
      status: "success",
      data: result,
      message: "Projects fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
      message: `Error fetching projects from database ${error}`,
    });
  }
}

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getAuthSession();

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
