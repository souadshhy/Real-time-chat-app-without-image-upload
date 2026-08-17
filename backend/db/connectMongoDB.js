import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDb");
    } catch (error) {
        console.log('Error connecting to MongoDb', error.message);
    }
}

export default connectMongoDB;