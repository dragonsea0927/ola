import type { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/utils/auth'
import { responseReturn } from '../../route'


export async function GET(
  req: NextRequest,
) {

  try {
    const about = await prisma.about.findMany()
    return responseReturn(200, "About page fetched successfully", 'success', about)
  }
  catch (error: any) {
    return responseReturn(500, `Error fetching about data from database ${error?.message}`, 'error')
  }
}

export async function POST(
  req: NextRequest,
) {

  const session: any = await getAuthSession();

  if (!session?.user?.email || session?.user?.role !== "admin") {
    return responseReturn(401, "You are not authorized to perform this action", 'error')
  }

  try {
    const body = await req.json()
    const about = await prisma.about.create({
      data: {
        ...body,
      }
    })
    return responseReturn(201, "About page created successfully", 'success', about)

  } catch (error: any) {
    return responseReturn(500, `Error adding about data to database ${error?.message}`, 'error')
  }
}