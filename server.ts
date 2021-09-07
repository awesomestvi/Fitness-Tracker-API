import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import {
  getAllExercises,
  getAllFinishedExercises,
  getFinishedExercisesByUserId,
} from "./get-exercises.route";
import { saveExercise } from "./save-exercise.route";
import { finishedExercises } from "./finished-exercise.route";
import { deleteExercise, deleteCustomExercise } from "./delete-exercise.route";
import { customExercise } from "./custom-exercise.route";
import { html } from "./welcome";

const port = process.env.PORT || 9000;

const bodyParser = require("body-parser");

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(html);
});

app.route("/api/exercises").get(getAllExercises);
app.route("/api/finished").get(getAllFinishedExercises);
app.route("/api/finished/:userId").get(getFinishedExercisesByUserId);

app.route("/api/exercise").post(finishedExercises);
app.route("/api/custom").post(customExercise);

app.route("/api/custom/:id").put(saveExercise);

app.route("/api/finished/:id").delete(deleteExercise);
app.route("/api/custom/:id").delete(deleteCustomExercise);

const httpServer: any = app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost:${port}`);
});
