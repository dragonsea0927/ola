import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'
import { Project } from '../../../types/appTypes'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = await connectToDatabase();
    const db = client.db("projects");

    const { name, description, stacks, github, url, image } = req.body;
    const project = { name, description, stacks, github, url, image };
    const result = await db.collection("projects").insertOne(project);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}