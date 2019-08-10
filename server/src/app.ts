import express from "express";

import { getQuestionary } from "./services/questionary";

const app = express();
const port = 3200;

app.get("/questionary", async (req, res) => {
  getQuestionary()
    .then(data => res.send(data))
    .catch(error =>
      res.status(400).send({
        error
      })
    );
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
