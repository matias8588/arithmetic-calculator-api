import express from "express";
import cors from "cors";

import routerApi from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

routerApi(app);

app.listen(3000, () => {
  console.log("Server en port: 3000");
});
