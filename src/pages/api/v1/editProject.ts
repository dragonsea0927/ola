import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'

// editProject is a Next.js API route that edits a project in the database.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = await connectToDatabase()
    const db = client.db('projects')

    const { id, name, description, stacks, github, url, image } = req.body
    const project = await db.collection('projects').updateOne(
      { _id: id },
      {
        $set: {
          name,
          description,
          stacks,
          github,
          url,
          image,
        },
      }
    )

    res.status(200).json(project)
  } catch (e) {
    console.error(e);
    throw new Error().message;
  }
}