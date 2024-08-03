// src/index.js
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"
import router from "./Routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//app use
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));
app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
