import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from "@/utils/auth";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  const { id } = req.query

  if (!session?.user?.email) {
    return res.status(401).json({
      status: 'error',
      message: "You are not authorized to perform this action"
    })
  }

  try {
    const contents = await prisma.about.findUnique({
      where: {
        id: id as string
      }
    })

    if (!contents) {
      return res.status(404).json({
        status: 'error',
        message: 'Not found'
      })
    }

    res.status(200).json({
      status: 'success',
      data: contents
    })

  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `Oops! Something went wrong. ${error?.message}`
    })
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  const { id } = req.query

  if (!session?.user?.email) {
    return res.status(401).json({
      status: 'error',
      message: "You are not authorized to perform this action"
    })
  }

  try {
    const checkExist = await prisma.about.findUnique({
      where: {
        id: id as string
      },
    })

    if (!checkExist) {
      return res.status(404).json({
        status: 'error',
        message: 'Not found'
      })
    }

    const updatedAbout = await prisma.about.update({
      where: {
        id: id as string
      },
      data: {
        ...req.body,
        updatedAt: new Date()
      }
    })
    res.status(200).json({
      status: 'success',
      data: updatedAbout
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `Oops! Something went wrong. ${error?.message}`
    })
  }
}