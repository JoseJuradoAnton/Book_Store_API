import express from "express";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT, (req, res) => {
  console.log(`App listen ot port ${PORT}`);
});
