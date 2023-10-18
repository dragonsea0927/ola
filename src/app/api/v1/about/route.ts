import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/utils/auth'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

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
}

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getAuthSession();

  if (!session?.user?.email || session?.user?.role !== "admin") {
    return res.status(401).json({
      status: "error",
      message: "You are not authorized to perform this action"
    })
  }

  try {
    const about = await prisma.about.create({
      data: {
        ...req.body,
      }
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
}