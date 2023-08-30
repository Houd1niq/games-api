import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from "axios";
import { restoreQueryString } from './helpers/restoreQueryString';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/games", async (req: Request, res: Response) => {
  const queryString = restoreQueryString(req.query);
  let address = "https://www.freetogame.com/api/games";
  if (req.query.tag) {
    address = "https://www.freetogame.com/api/filter";
  }
  console.log(queryString, "queryString", address);
  const response = await axios(address + queryString, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  });
  console.log(response)
  res.send(response.data);
})
app.get("/", async (req: Request, res: Response) => {
  res.send("hello world")
});


app.get("/game/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await axios(` https://www.freetogame.com/api/game?id=${id}`, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  });
  res.send(response.data);
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export {app}
