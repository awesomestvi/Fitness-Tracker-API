import { Request, Response } from "express";
import { RSVP } from "../database/db-data";

export let newRsvpCounter = 1;

export function rsvp(req: Request, res: Response) {
  const changes = req.body;

  const newRsvp = {
    ...changes,
    id: newRsvpCounter,
  };

  RSVP[newRsvp.id] = newRsvp;

  newRsvpCounter += 1;

  res.status(200).json(newRsvp);
}
