import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';

export default async function handler(
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