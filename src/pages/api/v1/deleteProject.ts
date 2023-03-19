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
    const result = await db
      .collection('projects')
      .deleteOne({ _id: new ObjectId(id as string) })

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}