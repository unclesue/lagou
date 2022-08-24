import { matchRoutes } from "react-router-config";
import routes from "../share/routes";
import app from "./app";
import createStore from "./createStore";
import renderer from "./renderer";

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    if (route.loadData) return route.loadData(store);
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
});
