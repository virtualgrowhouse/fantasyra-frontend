import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true, now: Date.now() }));

const publicDir = path.resolve(__dirname, "..", "dist", "public");

// If a production build exists, serve it. Otherwise, warn and keep API running.
fs.stat(publicDir)
  .then(() => {
    app.use(express.static(publicDir));
    app.get("*", (_req, res) => res.sendFile(path.join(publicDir, "index.html")));
    console.log("Serving static build from:", publicDir);
  })
  .catch(() => {
    console.log("No production build found at", publicDir);
    console.log("In development use the Vite dev server at http://localhost:5173/");
  });

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  console.log("API endpoint: GET /api/health");
});
