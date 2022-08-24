import app from "./app";
import renderer from "./renderer";

app.get("*", (req, res) => {
  res.send(renderer(req))
})
