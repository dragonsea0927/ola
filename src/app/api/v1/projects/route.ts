import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma';
import { getAuthSession } from '@/utils/auth';
import { Project } from '@/types'

export async function GET(
  req: NextRequest,
) {
  const { searchParams } = new URL(req.nextUrl.toString());
  const tag = searchParams.get('tag');

  try {
    const result = await prisma.project.findMany({
      orderBy: [
        { createdAt: 'desc' },
        { updatedAt: 'desc' },
      ],

      where: {
        tag: {
          contains: tag as string,
        },
      },

      select: {
        id: true,
        name: true,
        description: true,
        stacks: true,
        githubUrl: true,
        liveUrl: true,
        coverImgUrl: true,
        modalImgUrl: true,
        tag: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return NextResponse.json({
      status: "success",
      message: "Projects fetched successfully",
      data: result,
      nHits: result.length,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error,
      message: `Error fetching projects from database ${error}`,
    }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
) {

  const session = await getAuthSession();

  try {
    const { name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag }: Project = await req.json();
    const project = {
      name, description, stacks, githubUrl, liveUrl, coverImgUrl, modalImgUrl, tag,
    };

    if (!session?.user?.email) {
      return NextResponse.json({
        status: "error",
        message: "You are not authorized to perform this action"
      },
        { status: 401 }
      )
    }

    const result = await prisma.project.create({
      data: {
        ...project,
        author: {
          connect: {
            email: session?.user?.email as string
          }
        }
      }
    });

    return NextResponse.json({
      status: "success",
      data: result,
      message: "Project added successfully",
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error,
      message: `Error adding project to database ${error}`,
    }, {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
