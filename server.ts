import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import {
  getAllExercises,
  getAllFinishedExercises,
} from "./get-exercises.route";
import { saveExercise } from "./save-exercise.route";
import { finishedExercises } from "./finished-exercise.route";
import { deleteExercise } from "./delete-exercise.route";
import { html } from "./welcome";

const port = process.env.PORT || 9000;

const bodyParser = require("body-parser");

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(html);
});

app.route("/api/exercises").get(getAllExercises);

app.route("/api/finished").get(getAllFinishedExercises);

app.route("/api/exercise").post(finishedExercises);

app.route("/api/exercise/:id").put(saveExercise);

app.route("/api/finished/:id").delete(deleteExercise);

const httpServer: any = app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost:${port}`);
});
