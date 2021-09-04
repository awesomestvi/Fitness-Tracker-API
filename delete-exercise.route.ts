import { Request, Response } from "express";
import { FINISHED_EXERCISES } from "./db-data";

export function deleteExercise(req: Request, res: Response) {
  console.log("Deleting exercise ...");

  const id = req.params["id"];

  delete FINISHED_EXERCISES[id];

  res.status(200).json({ id });
}
