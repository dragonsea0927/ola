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

    if (result.deletedCount === 0) {
      res.status(404).json({
        status: 'error',
        message: 'Project not found'
      })
    } else {
      res.status(200).json({
        status: 'success',
        message: `Project deleted successfully with id: ${id}`
      })
    }
  } catch (error) {
    res.status(500).json({
      error: error,
      message: `Error deleting project from database ${error}`
    })
  }
}