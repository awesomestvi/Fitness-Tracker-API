import { Request, Response } from "express";
import { RSVP } from "../database/db-data";

export function getAllRsvp(req: Request, res: Response) {
  res.status(200).json(Object.values(RSVP));
}
