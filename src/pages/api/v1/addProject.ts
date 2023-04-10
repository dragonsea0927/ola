import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'
import { Project } from '../../../types/appTypes'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, userId }: Project = req.body;
    const project = { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, userId };
    const result = await prisma.project.create({
      data: project,
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