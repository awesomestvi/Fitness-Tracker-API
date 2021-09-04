import { Request, Response } from "express";
import { EXERCISES } from "./db-data";

export function deleteExercise(req: Request, res: Response) {
  console.log("Deleting exercise ...");

  const id = req.params["id"];

  delete EXERCISES[id];

  res.status(200).json({ id });
}
