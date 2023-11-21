import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma';
import { getAuthSession } from '@/utils/auth';
import { Project } from '@/types'
import { responseReturn } from '../../utils';

enum tagEnum {
  fullstack,
  frontend,
  backend,
}

enum publishedEnum {
  true,
  false,
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl.toString());
  const tag = searchParams.get('tag');
  const isPublished = searchParams.get('published');
  const session = await getAuthSession();

  if (tag && !Object.values(tagEnum).includes(tag as any)) {
    return responseReturn(400, "Invalid tag", 'error');
  }

  if (isPublished && !Object.values(publishedEnum).includes(isPublished as any)) {
    return responseReturn(400, "Invalid published value", 'error');
  }

  try {
    let result;

    if (tag) {
      result = await prisma.project.findMany({
        orderBy: [
          { createdAt: 'desc' },
          { updatedAt: 'desc' },
        ],
        where: {
          tag: {
            contains: tag as string,
          },
          ...(isPublished && { published: Boolean(isPublished) }),
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
          published: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } else if (isPublished) {
      result = await prisma.project.findMany({
        orderBy: [
          { createdAt: 'desc' },
          { updatedAt: 'desc' },
        ],
        where: {
          published: Boolean(isPublished),
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
          published: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } else {
      result = await prisma.project.findMany({
        orderBy: [
          { createdAt: 'desc' },
          { updatedAt: 'desc' },
        ],
        where: {
          author: {
            email: session?.user?.email as string
          }
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
          published: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }

    return responseReturn(200, "Projects fetched successfully", 'success', result);
  } catch (error: any) {
    return responseReturn(500, 'Error fetching projects from the database', 'error', null, error?.message);
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
      return responseReturn(401, "You are not authorized to perform this action", 'error')
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
    return responseReturn(201, "Project added successfully", 'success', result)
  } catch (error: any) {
    return responseReturn(500, `Error adding project to database`, 'error', null, error?.message)
  }
}
