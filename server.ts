import * as express from "express";
import { Application } from "express";
import { getAllExercises, getExerciseByUrl } from "./get-exercises.route";
import { saveExercise } from "./save-exercise.route";
import { createExercise } from "./create-exercise.route";
import { deleteExercise } from "./delete-exercise.route";
import { html } from "./welcome";

const port = process.env.PORT || 9000;

const bodyParser = require("body-parser");

const app: Application = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(html);
});

app.route("/api/exercises").get(getAllExercises);

app.route("/api/exercise").post(createExercise);

app.route("/api/exercise/:id").put(saveExercise);

app.route("/api/exercise/:id").delete(deleteExercise);

app.route("/api/exercises/:exerciseUrl").get(getExerciseByUrl);

const httpServer: any = app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost:${port}`);
});
