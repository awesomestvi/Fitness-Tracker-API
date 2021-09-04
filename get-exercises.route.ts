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

export function getExerciseByUrl(req: Request, res: Response) {
  const exerciseUrl = req.params["exerciseUrl"];

  const exercises: any = Object.values(EXERCISES);

  const exercise = exercises.find((exercise) => exercise.url == exerciseUrl);

  res.status(200).json(exercise);
}
