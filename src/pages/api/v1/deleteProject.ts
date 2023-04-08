import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query
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

    await prisma.project.delete({
      where: {
        id: id as string
      }
    })
    res.status(200).json({
      status: 'success',
      message: `Project deleted successfully with id: ${id}`
    })

  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Error deleting project from database ${error}`
    })
  }
}