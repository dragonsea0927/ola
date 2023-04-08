import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = await connectToDatabase()
    const db = client.db('projects')
    const { id, name, description, stacks, github, url, coverImg, modalImg, tag } = req.body

    const projectExist = await db.collection('projects').findOne({
      _id: new ObjectId(id as string)
    })

    if (!projectExist) {
      res.status(404).json({
        status: 'error',
        message: 'Project not found'
      })
    }
    const project = await db.collection('projects').updateOne(
      { _id: new ObjectId(id as string) },
      {
        $set: {
          name,
          description,
          stacks,
          github,
          url,
          coverImg,
          modalImg,
          tag,
        },
      }
    )

    res.status(200).json({
      status: 'success',
      message: 'Project updated successful',
      data: project
    })
  } catch (e) {
    res.status(500).json({
      status: 'Internal error',
      message: `Error updating project ${e}`
    })
  }
}