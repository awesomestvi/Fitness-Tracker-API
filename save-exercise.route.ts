import { Request, Response } from "express";
import { EXERCISES, FINISHED_EXERCISES } from "./db-data";

export function saveExercise(req: Request, res: Response) {
  console.log("Saving exercise ...");

  const id = req.params["id"],
    changes = req.body;

  EXERCISES[id] = {
    ...EXERCISES[id],
    ...changes,
  };

  res.status(200).json(EXERCISES[id]);
}

export function saveFinishedExercise(req: Request, res: Response) {
  console.log("Saving Finished exercise ...");

  const id = req.params["id"],
    changes = req.body;

  FINISHED_EXERCISES[id] = {
    ...FINISHED_EXERCISES[id],
    ...changes,
  };

  res.status(200).json(FINISHED_EXERCISES[id]);
}
