import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { About } from '@/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getServerSession(req, res, authOptions)

  switch (req.method) {
    case "GET":
      try {
        const about = await prisma.about.findMany()
        res.status(200).json({
          status: "success",
          data: about,
          message: "About page fetched successfully"
        })
      }
      catch (error) {
        res.status(500).json({
          status: "error",
          error: error,
          message: `Error fetching about data from database ${error}`,
        });
      }
      break;
    case "POST":

      if (!session?.user?.email) {
        return res.status(401).json({
          status: "error",
          message: "You are not authorized to perform this action"
        })
      }

      try {
        const aboutItems: About = req.body
        const about = await prisma.about.create({
          data: req.body
        })
        res.status(201).json({
          status: "success",
          data: about,
          message: "About page created successfully"
        })

      } catch (error) {
        res.status(500).json({
          status: "error",
          error: error,
          message: `Error adding about data to database ${error}`,
        });
      }
      break;
    default:
      res.status(405).json({
        status: "error",
        message: "Method not allowed"
      })
      break;
  }
}