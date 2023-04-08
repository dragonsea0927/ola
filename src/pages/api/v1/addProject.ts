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

    const { name, description, stacks, github, url, coverImg, modalImg, tag }: Project = req.body;
    const project = { name, description, stacks, github, url, coverImg, modalImg, tag };
    const result = await db.collection("projects").insertOne(project);

    res.status(200).json({
      status: "success",
      data: result,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
      message: `Error adding project to database ${error}`,
    });
  }
}