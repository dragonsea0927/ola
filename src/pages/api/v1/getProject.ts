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

    const { id } = req.query

    const projectExist = await db.collection('projects').findOne({
      _id: new ObjectId(id as string)
    })

    if (!projectExist) {
      res.status(404).json({
        status: 'error',
        message: 'Project not found'
      })
    }

    const result = await db
      .collection('projects')
      .findOne({ _id: new ObjectId(id as string) })

    res.status(200).json({
      status: 'success',
      message: 'Project found successful',
      data: result
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Error getting project ${error}`
    })
  }
}
