import prisma from '@/lib/prisma'
import { NextRequest } from 'next/server'
import { getAuthSession } from '@/utils/auth';
import { responseReturn } from '@/app/api/route';

export default async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const session = await getAuthSession();
  try {

    if (!session?.user?.email) {
      return responseReturn(401, "You are not authorized to perform this action", 'error')
    }
    const togglePublished = await prisma.project.findUnique({
      where: { id: id as string },
    })

    if (!togglePublished) {
      return responseReturn(404, `Project not found with id: ${id}`, 'error')
    }

    const project = await prisma.project.update({
      where: { id: id as string },
      data: { published: !togglePublished?.published },
    })
    return responseReturn(200, `Project published successfully with id: ${id}`, 'success', project)
  } catch (error) {
    return responseReturn(500, `Error publishing project with id: ${id}`, 'error')
  }
}