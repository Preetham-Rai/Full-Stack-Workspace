import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Hello Folks this is from the server`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
