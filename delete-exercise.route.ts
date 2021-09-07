import { Request, Response } from "express";
import { FINISHED_EXERCISES, EXERCISES } from "./db-data";

export function deleteExercise(req: Request, res: Response) {
  console.log("Deleting exercise ...");

  const id = req.params["id"];

  delete FINISHED_EXERCISES[id];

  res.status(200).json({ id });
}

export function deleteCustomExercise(req: Request, res: Response) {
  console.log("Deleting custom exercise ...");

  const id = req.params["id"];

  delete EXERCISES[id];

  res.status(200).json({ id });
}
