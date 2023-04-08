import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  try {
    const projectExist = await prisma.project.findUnique({
      where: {
        id: id as string
      }
    })

    if (!projectExist) {
      res.status(404).json({
        status: 'error',
        message: 'Project not found'
      })
    }
    const project = await prisma.project.update({
      where: {
        id: id as string
      },
      data: req.body
    })

    res.status(200).json({
      status: 'success',
      message: 'Project updated successful',
      data: project
    })
  } catch (e) {
    res.status(500).json({
      status: 'Internal error',
      message: `Error updating project ${e}`
    })
  }
}