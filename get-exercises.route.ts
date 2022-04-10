import { Request, Response } from "express";
import { EXERCISES, FINISHED_EXERCISES } from "./db-data";

export function getAllExercises(req: Request, res: Response) {
  console.log("Retrieving exercises data ...");

  res.status(200).json(Object.values(EXERCISES));
}

export function getAllFinishedExercises(req: Request, res: Response) {
  console.log("Retrieving finished exercises data ...");

  res.status(200).json(Object.values(FINISHED_EXERCISES));
}

export function getFinishedExercisesByUserId(req: Request, res: Response) {
  const userId = req.params["userId"];

  const exercises: any = Object.values(FINISHED_EXERCISES);

  const exercise = exercises.filter((exercise) => {
    return exercise.user == userId;
  });

  res.status(200).json(exercise);
}
