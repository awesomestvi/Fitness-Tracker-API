import { Request, Response } from "express";
import { EXERCISES } from "./db-data";

export let exerciseKeyCounter = 30;

export function customExercise(req: Request, res: Response) {
  console.log("Creating new custom exercise ...");

  const changes = req.body;

  const newExercise = {
    ...changes,
    id: exerciseKeyCounter,
    seqNo: exerciseKeyCounter,
  };

  EXERCISES[newExercise.id] = newExercise;

  exerciseKeyCounter += 1;

  res.status(200).json(newExercise);
}
