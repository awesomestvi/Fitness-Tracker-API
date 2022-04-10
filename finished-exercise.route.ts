import { Request, Response } from "express";
import { FINISHED_EXERCISES } from "./db-data";

export let exerciseKeyCounter = 100;

export function finishedExercises(req: Request, res: Response) {
  console.log("Creating new exercise ...");

  const changes = req.body;

  const newExercise = {
    ...changes,
    id: exerciseKeyCounter,
    seqNo: exerciseKeyCounter,
  };

  FINISHED_EXERCISES[newExercise.id] = newExercise;

  exerciseKeyCounter += 1;

  res.status(200).json(newExercise);
}
