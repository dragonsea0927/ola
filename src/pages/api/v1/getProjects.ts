import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = await connectToDatabase();
    const db = client.db("projects");

    const result = await db.collection("projects").find().toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}