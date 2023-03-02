import express from "express";
import DataStore from "./DataStore";

const app = express();

app.listen(8080, () => {
  console.log("server running...");
});

app.get('/', (req, res) => {
  res.json(DataStore.list)
})