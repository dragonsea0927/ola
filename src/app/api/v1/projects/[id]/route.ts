import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/utils/auth';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id as string
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    if (!project) {
      return NextResponse.json({
        status: 'error',
        message: 'Project not found'
      }, {
        status: 404,
      })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Project found successful',
      data: project
    })

  } catch (error) {
    return NextResponse.json({
      error: error,
      message: `Error getting project ${error}`
    })
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

  const session = await getAuthSession();
  const { id } = params
  try {

    if (!session?.user?.email) {
      return NextResponse.json({
        status: "error",
        message: "You are not authorized to perform this action"
      }, {
        status: 401
      })

    }

    const projectExist = await prisma.project.findUnique({
      where: {
        id: id as string
      }
    })

    if (!projectExist) {
      return NextResponse.json({
        status: 'error',
        message: 'Project not found'
      }, {
        status: 404,
      })
    }

    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag } = await req.json()
    const project = await prisma.project.update({
      where: {
        id: id as string
      },
      data: {
        name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag, updatedAt: new Date()
      }
    })

    return NextResponse.json({
      status: 'success',
      message: 'Project updated successful',
      data: project
    }, {
      status: 200
    })
  } catch (e) {
    return NextResponse.json({
      status: 'Internal error',
      message: `Error updating project ${e}`
    }, {
      status: 500
    })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

  const session = await getAuthSession();
  try {
    const { id } = params

    if (!session?.user?.email) {
      return NextResponse.json({
        status: "error",
        message: "You are not authorized to perform this action"
      }, {
        status: 401
      })
    }

    const project = await prisma.project.findUnique({
      where: {
        id: id as string
      }
    })

    if (!project) {
      return NextResponse.json({
        status: 'error',
        message: 'Project not found'
      }, {
        status: 404,
      })
    }

    await prisma.project.delete({
      where: {
        id: id as string
      }
    })
    return NextResponse.json({
      status: 'success',
      message: `Project deleted successfully with id: ${id}`
    }, {
      status: 200
    })

  } catch (error) {
    return NextResponse.json({
      error: error,
      message: `Error deleting project from database ${error}`
    }, {
      status: 500
    })
  }
}
