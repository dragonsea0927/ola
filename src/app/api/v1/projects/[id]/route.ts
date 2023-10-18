import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/utils/auth';

export async function GET(
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

      res.status(200).json({
        status: 'success',
        message: 'Project found successful',
        data: project
      })
    }
  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Error getting project ${error}`
    })
  }
}

export default async function PUT(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getAuthSession();
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

export async function DELETE(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getAuthSession();

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
