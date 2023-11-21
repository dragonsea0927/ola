import type { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'
import { getAuthSession } from "@/utils/auth";
import { responseReturn } from '@/app/api/utils';

export async function GET
  (req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAuthSession();
  const { id } = params

  if (!session?.user?.email) {
    return responseReturn(401, "You are not authorized to perform this action", 'error')
  }

  try {
    const contents = await prisma.about.findUnique({
      where: {
        id: id as string
      }
    })

    if (!contents) {
      return responseReturn(404, "About contents not found", 'error')
    }

    return responseReturn(200, "About fetched successfully", 'success', contents)

  } catch (error: any) {
    return responseReturn(500, `Oops! Something went wrong. ${error?.message}`, 'error', null, error?.message)
  }
}

export async function PATCH(
  req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAuthSession();
  const { id } = params

  if (!session?.user?.email) {
    return responseReturn(401, "You are not authorized to perform this action", 'error')
  }

  try {
    const body = await req.json()
    const checkExist = await prisma.about.findUnique({
      where: {
        id: id as string
      },
    })

    if (!checkExist) {
      return responseReturn(404, "About contents not found", 'error')
    }

    const updatedAbout = await prisma.about.update({
      where: {
        id: id as string
      },
      data: {
        ...body,
        updatedAt: new Date()
      }
    })

    return responseReturn(200, "About updated successfully", 'success', updatedAbout)
  } catch (error: any) {
    return responseReturn(500, `Oops! Something went wrong. ${error?.message}`, 'error', null, error?.message)
  }
}