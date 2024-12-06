import dotenv from "dotenv";
dotenv.config({ path: [".env.local", ".env"] });

import http from "http";

import app from "./app";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE environment variable is not set");
}

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
