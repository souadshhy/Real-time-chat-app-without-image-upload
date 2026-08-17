import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";
import connectMongoDB from './db/connectMongoDB.js';


const app = express();
app.use(express.json());
dotenv.config();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server Running on port, ${PORT}`);
    })
