import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

// load env
dotenv.config();

// recreate __dirname for ESM (required)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// port from .env
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// production static serving (Express 5 compatible)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get(/.*/, (_, res) => {
    res.sendFile(
      path.join(__dirname, "../../frontend/dist/index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
