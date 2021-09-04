import { Request, Response } from "express";
import { EXERCISES } from "./db-data";

export var exerciseKeyCounter = 100;

export function createExercise(req: Request, res: Response) {
  console.log("Creating new exercise ...");

  const changes = req.body;

  const newEcercise = {
    id: exerciseKeyCounter,
    seqNo: exerciseKeyCounter,
    ...changes,
  };

  EXERCISES[newEcercise.id] = newEcercise;

  exerciseKeyCounter += 1;

  res.status(200).json(newEcercise);
}
