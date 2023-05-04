import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { id } = req.query
  const { method } = req

  if (!session?.user?.email) {
    return res.status(401).json({
      status: 'error',
      message: "You are not authorized to perform this action"
    })
  }

  switch (method) {
    case 'GET':
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
      break
    case 'PUT':
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
      break
    default:
      res.status(405).json({ message: 'HTTP Method not allowed' })
      break
  }
}