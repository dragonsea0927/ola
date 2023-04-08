import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id as string
      }
    })

    if (!project) {
      res.status(404).json({
        status: 'error',
        message: 'Project not found'
      })
    }

    res.status(200).json({
      status: 'success',
      message: 'Project found successful',
      data: project
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Error getting project ${error}`
    })
  }
}
