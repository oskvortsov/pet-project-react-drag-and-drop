import express from "express";

import { handlerError, handlerResponse } from "./helpers/response";
import { getQuestionary, setQuestionary } from "./services/questionary";

const app = express();
const port = 3200;

app.use(express.json());
app.use(express.urlencoded());

app.get("/api/questionary", async (req, res) => {
  getQuestionary()
    .then(handlerResponse(res))
    .catch(handlerError(res));
});

app.post("/api/questionary", async (req, res) => {
  setQuestionary(req.body)
    .then(handlerResponse(res))
    .catch(handlerError(res));
});

app.listen(port);
