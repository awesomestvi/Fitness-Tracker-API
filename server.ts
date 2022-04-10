import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import { getAllRsvp } from "./routes/get-rsvp.route";
import { rsvp } from "./routes/rsvp.route";

const port = process.env.PORT || 9000;

const bodyParser = require("body-parser");

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.route("/data/get-rsvp").get(getAllRsvp);

app.route("/data/rsvp").post(rsvp);

const httpServer: any = app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost:${port}`);
});
