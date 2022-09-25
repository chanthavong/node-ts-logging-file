import express from "express";
import logger from "./lib/logger";

const app = express();

// app.get("/", (req, res) => {
//   logger.info("Hello logging", { level: "APP", label: "INDEX" });
//   res.status(200).json({ status: "Hello logging" });
// });

app.post("/", (req, res) => {
  logger.info("ts", { level: "APP", label: "PRODUCTION" });
  res.status(200).json({ status: "success" });
});

const port = 5001;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
