import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)

  try {
    const { id } = req.query

    if (!session?.user?.email) {
      return res.status(401).json({
        status: "error",
        message: "You are not authorized to perform this action"
      })
    }

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