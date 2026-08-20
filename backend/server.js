import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";
import connectMongoDB from './db/connectMongoDB.js';
import { app, server } from "./socket/socket.js";
import path from "path";
app.use(express.json());
dotenv.config();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server Running on port, ${PORT}`);
});
