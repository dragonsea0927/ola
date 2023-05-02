import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const { id } = req.query
  const { method } = req

  switch (method) {
    case 'GET':
      const contents = await prisma.about.findUnique({
        where: {
          id: id as string
        }
      })
      res.status(200).json({
        status: 'success',
        data: contents
      })
      break
    case 'PUT':
      const updatedAbout = await prisma.about.update({
        where: {
          id: id as string
        },
        data: req.body
      })
      res.status(200).json({
        status: 'success',
        data: updatedAbout
      })
      break
    default:
      res.status(405).json({ message: 'Method not allowed' })
      break
  }
}