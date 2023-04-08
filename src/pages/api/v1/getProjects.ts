import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../lib'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client } = await connectToDatabase();
    const db = client.db("projects");

    const result = await db.collection("projects").find({}).toArray();
    res.status(200).json({
      status: "success",
      data: result,
      message: "Projects fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error,
      message: `Error fetching projects from database ${error}`,
    });
  }
}