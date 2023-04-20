import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  try {
    const togglePublished = await prisma.project.findUnique({
      where: { id: id as string },
    })

    if (!togglePublished) {
      res.status(404).json({
        status: 'error',
        message: `Project not found with id: ${id}`,
      })
    }

    const project = await prisma.project.update({
      where: { id: id as string },
      data: { published: !togglePublished?.published },
    })
    res.json({
      status: 'success',
      message: `Project published successfully with id: ${id}`,
      project,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error?.message,
      message: `Error publishing project with id: ${id}`,
    })
  }
}