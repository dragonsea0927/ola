import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)
  const { id } = req.query
  try {

    if (!session?.user?.email) {
      return res.status(401).json({
        status: "error",
        message: "You are not authorized to perform this action"
      })

    }

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

    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, } = req.body
    const project = await prisma.project.update({
      where: {
        id: id as string
      },
      data: {
        name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, updatedAt: new Date()
      }
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